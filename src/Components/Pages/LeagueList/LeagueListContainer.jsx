/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getLeagueList } from '../../../Api/http';
import LeagueListPage from './LeagueListPage';

export default function LeagueListPageContainer() {
  const history = useHistory();
  const [leagueListPage, setLeagueListPage] = useState([]);

  useEffect(async () => {
    const leagueList = await getLeagueList();
    setLeagueListPage(leagueList.competitions);
    console.log('cmp', leagueList);
  }, []);

  const handleClickLeague = (id) => {
    history.push(`/league-calendar/${id}`);
  };
  return (
    <LeagueListPage
      onClickLeague={handleClickLeague}
      competitions={leagueListPage}
    />
  );
}
