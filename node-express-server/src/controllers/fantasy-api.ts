import axios from 'axios';

const BASE_URL = 'https://fantasy.premierleague.com/api';

interface PremierLeagueApi {
  getUserPicks: (entryId: number, gw: number) => Promise<any>;
  getUserTransfers: (entryId: number) => Promise<any>;
  getLeagueStandings: (leagueId: number, page?: number) => Promise<any>;
  getBootstrapStatic: () => Promise<any>;
  getLiveEvent: (gw: number) => Promise<any>;
}

const PremierLeagueApi: PremierLeagueApi = {
  getUserPicks: async (entryId: number, gw: number) => {
    const response = await axios.get(`${BASE_URL}/entry/${entryId}/event/${gw}/picks/`);
    return response.data;
  },

  getUserTransfers: async (entryId: number) => {
    const response = await axios.get(`${BASE_URL}/entry/${entryId}/transfers/`);
    return response.data;
  },

  getLeagueStandings: async (leagueId: number, page: number = 1) => {
    const response = await axios.get(`${BASE_URL}/leagues-classic/${leagueId}/standings/`, {
      params: { page_standings: page }
    });
    return response.data;
  },

  getBootstrapStatic: async () => {
    const response = await axios.get(`${BASE_URL}/bootstrap-static/`);
    return response.data;
  },

  getLiveEvent: async (gw: number) => {
    const response = await axios.get(`${BASE_URL}/event/${gw}/live/`);
    return response.data;
  }
};

export default PremierLeagueApi;
