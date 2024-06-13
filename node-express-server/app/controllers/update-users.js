const api = require('./fantasy-api'); // Ensure the correct path
const db = require('../models');
const Users = db.users;

const insertOrUpdateUsers = async (data, gw) => {
  const bulkOps = [];

  for (const user of data) {
    try {
      const userDetails = await api.getUserPicks(user.entry, gw);
      const gameweekStats = {
        id: gw,
        active_chip: userDetails.active_chip,
        automatic_subs: userDetails.automatic_subs,
        entry_history: userDetails.entry_history,
        picks: userDetails.picks,
        transfers: []
      };

      const transferDetails = await api.getUserTransfers(user.entry);
      const transfers = transferDetails.filter(transfer => transfer.event === gw);
      gameweekStats.transfers = transfers;

      console.log(`Transfers for entry ${user.entry}, GW ${gw}:`, transfers);

      const existingUser = await Users.findOne({ apiId: user.id });
      if (!existingUser) {
        bulkOps.push({
          insertOne: {
            document: {
              apiId: user.id,
              playerName: user.player_name,
              entryName: user.entry_name,
              totalPoints: user.total,
              eventTotal: user.event_total,
              rank: user.rank,
              lastRank: user.last_rank,
              rankSort: user.rank_sort,
              entry: user.entry,
              gameweek_stats: [gameweekStats]
            }
          }
        });
      } else {
        if (!existingUser.gameweek_stats) {
          bulkOps.push({
            updateOne: {
              filter: { apiId: user.id },
              update: {
                $set: {
                  gameweek_stats: [gameweekStats]
                }
              }
            }
          });
        } else {
          bulkOps.push({
            updateOne: {
              filter: { apiId: user.id },
              update: {
                $set: {
                  playerName: user.player_name,
                  entryName: user.entry_name,
                  totalPoints: user.total,
                  eventTotal: user.event_total,
                  rank: user.rank,
                  lastRank: user.last_rank,
                  rankSort: user.rank_sort,
                  entry: user.entry,
                  "gameweek_stats.$[elem]": gameweekStats
                }
              },
              arrayFilters: [{ "elem.id": gw }],
              upsert: true
            }
          });

          bulkOps.push({
            updateOne: {
              filter: { apiId: user.id, "gameweek_stats.id": { $ne: gw } },
              update: {
                $push: {
                  gameweek_stats: gameweekStats
                }
              }
            }
          });
        }
      }
    } catch (error) {
      console.error(`Error fetching details for entry ${user.entry}:`, error);
    }
  }

  if (bulkOps.length > 0) {
    await Users.bulkWrite(bulkOps);
  }
};

const fetchLeagueStandings = async (leagueId, gw, page = 1) => {
  try {
    const data = await api.getLeagueStandings(leagueId, page);
    await insertOrUpdateUsers(data.standings.results, gw);

    if (data.standings.has_next) {
      await fetchLeagueStandings(leagueId, gw, page + 1);
    }
  } catch (error) {
    console.error('Error fetching league standings:', error);
  }
};

const updateUsersFromLeagueStandings = async (leagueId, gw) => {
  await fetchLeagueStandings(leagueId, gw);
  console.log('Users updated successfully from league standings!');
};

module.exports = updateUsersFromLeagueStandings;
