/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getLeagueList } from '../../../Api/http';
import Loading from '../../Loading/Loading';
import LeagueListPage from './LeagueListPage';

export default function LeagueListPageContainer() {
  const history = useHistory();
  const [leagueListPage, setLeagueListPage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const leagueList = await getLeagueList();
    setLeagueListPage(leagueList.competitions);
    setLoading(false);
  }, []);

  const handleClickLeague = (id) => {
    history.push(`/league-calendar/${id}`);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LeagueListPage
          onClickLeague={handleClickLeague}
          competitions={leagueListPage}
        />
      )}
    </>
  );
}
