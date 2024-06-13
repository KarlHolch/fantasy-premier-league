const axios = require('axios');

const BASE_URL = 'https://fantasy.premierleague.com/api';

const api = {
  getUserPicks: async (entryId, gw) => {
    const response = await axios.get(`${BASE_URL}/entry/${entryId}/event/${gw}/picks/`);
    return response.data;
  },

  getUserTransfers: async (entryId) => {
    const response = await axios.get(`${BASE_URL}/entry/${entryId}/transfers/`);
    return response.data;
  },

  getLeagueStandings: async (leagueId, page = 1) => {
    const response = await axios.get(`${BASE_URL}/leagues-classic/${leagueId}/standings/`, {
      params: { page_standings: page }
    });
    return response.data;
  },

  getBootstrapStatic: async () => {
    const response = await axios.get(`${BASE_URL}/bootstrap-static/`);
    return response.data;
  },

  getLiveEvent: async (gw) => {
    const response = await axios.get(`${BASE_URL}/event/${gw}/live/`);
    return response.data;
  }
};

module.exports = api;
