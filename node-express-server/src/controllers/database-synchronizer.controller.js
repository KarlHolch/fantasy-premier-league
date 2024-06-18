const api = require('./fantasy-api');
const db = require("../models");
const updateUsersFromLeagueStandings = require('./update-users');
const LEAGUE_ID = 1126483;
const collectionNameMap = {
  events: 'gameweeks',
  teams: 'teams',
  elements: "players",
  // Add more mappings as needed
};

function getCustomCollectionName(key) {
  return collectionNameMap[key];
}

const insertOrUpdateDocuments = async (data) => {
  for (const key in data) {
    if (data.hasOwnProperty(key) && Array.isArray(data[key]) && key !== 'element_types' && key !== 'game_settings' && key !== 'phases' && key !== 'element_stats') {
      const Model = db.mongoose.model(getCustomCollectionName(key));
      const operations = data[key].map(item => ({
        updateOne: {
          filter: { apiId: item.id },
          update: item,
          upsert: true
        }
      }));
      await Model.bulkWrite(operations);
    }
  }
};

const updatePlayerStats = async (gw) => {
  try {
    const players = await api.getLiveEvent(gw);
    const playerModel = db.mongoose.model('players');

    const bulkOps = [];

    for (const player of players.elements) {
      const gwStats = {
        id: gw,
        stats: player.stats,
        explain: player.explain
      };

      bulkOps.push({
        updateOne: {
          filter: { apiId: player.id },
          update: {
            $set: {
              "gw_stats.$[elem]": gwStats
            }
          },
          arrayFilters: [{ "elem.id": gw }],
          upsert: true
        }
      });

      // Handle case where the gw does not exist in the array
      bulkOps.push({
        updateOne: {
          filter: { apiId: player.id, "gw_stats.id": { $ne: gw } },
          update: {
            $push: {
              gw_stats: gwStats
            }
          }
        }
      });
    }

    await playerModel.bulkWrite(bulkOps);
  } catch (error) {
    console.error('Error updating player stats:', error);
  }
};

exports.updateBaseInfo = async (req, res) => {
  try {
    // Make the HTTP request to the endpoint
    const baseData = await api.getBootstrapStatic();

    // Update each object in its corresponding MongoDB collection
    await insertOrUpdateDocuments(baseData);

    // Find the current and previous game weeks
    const gameweeks = baseData.events;
    const currentGW = gameweeks.find(gw => gw.is_current);
    const previousGW = gameweeks.find(gw => gw.is_previous);

    // Update player stats for the current and previous game weeks if they exist
    if (currentGW) {
      await updatePlayerStats(34);
      await updateUsersFromLeagueStandings(LEAGUE_ID, 34); // Call the function here
    }

    if (previousGW) {
      await updatePlayerStats(35);
      await updateUsersFromLeagueStandings(LEAGUE_ID, 35); // Call the function here
    }

    return res.json({ message: 'Base info and player stats updated successfully!' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'An error occurred while updating base info and player stats.' });
  }
};
