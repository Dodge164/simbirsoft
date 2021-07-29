import axios from 'axios';

const queryString = require('query-string');

const API_KEY = process.env.REACT_APP_DB_API_KEY;
const url = process.env.REACT_APP_FBLDB_URL;

const fetchRequest = async (way) => {
  const res = await axios.get(`${url}${way}`, {
    headers: {
      'X-Auth-Token': API_KEY,
    },
  });
  return res.data;
};

export const getLeagueList = async () => {
  const data = await fetchRequest('/competitions');
  return data;
};

export const getLeagueCalendarPage = async (leagueId) => {
  const data = await fetchRequest(`/competitions/${leagueId}`);
  return data;
};

export const getTeamsList = async () => {
  const data = await fetchRequest('/teams');
  return data;
};

export const getTeamCalendarPage = async (teamId) => {
  const data = await fetchRequest(`/teams/${teamId}/matches`);
  return data;
};

export const getLeagueTeamsList = async (leagueId) => {
  const parse = queryString.parse(window.location.search);
  console.log('111', parse);
  let path = '';
  if (parse.season) {
    path = `/competitions/${leagueId}/teams?season=${parse.season}`;
  } else {
    path = `/competitions/${leagueId}/teams`;
  }
  const data = await fetchRequest(path);

  return data;
};

export default fetchRequest;
