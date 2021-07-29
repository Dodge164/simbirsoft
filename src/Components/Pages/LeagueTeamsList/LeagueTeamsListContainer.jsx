/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getLeagueTeamsList } from '../../../Api/http';
import Loading from '../../Loading/Loading';
import Searching from '../../Searching/Searching';
import TeamListContainer from '../TeamList';

export default function LeagueTeamsListContainer({ leagueId }) {
  const [leagueTeamsListPage, setLeagueTeamsListPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');

  useEffect(async () => {
    const leagueTeamsList = await getLeagueTeamsList(leagueId);
    setLeagueTeamsListPage(leagueTeamsList);
    setLoading(false);
  }, []);

  const filterLeagueTeams = leagueTeamsListPage?.teams?.filter(
    (league) =>
      league.name.toLowerCase().includes(value.toLowerCase()) ||
      league.area.name.toLowerCase().includes(value.toLowerCase()) ||
      league.currentSeason?.startDate
        .toLowerCase()
        .includes(value.toLowerCase()) ||
      league.currentSeason?.endDate
        .toLowerCase()
        .includes(value.toLowerCase()) ||
      league.lastUpdated.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TeamListContainer teams={filterLeagueTeams} />
        </>
      )}
    </>
  );
}
