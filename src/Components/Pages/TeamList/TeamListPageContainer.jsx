import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getTeamsList } from '../../../Api/http';
import TeamListPage from './TeamListPage';

export default function TeamListPageContainer() {
  const history = useHistory();
  const [teamListPage, setTeamListPage] = useState([]);
  useEffect(async () => {
    const teamList = await getTeamsList();
    setTeamListPage(teamList.teams);
  }, []);

  const handleClickTeam = (id) => {
    history.push(`/team-calendar/${id}`);
  };

  console.log('teamListPage', teamListPage);
  return <TeamListPage onClickTeam={handleClickTeam} teams={teamListPage} />;
}
