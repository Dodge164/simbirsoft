import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getTeamsList } from '../../../Api/http';
import Loading from '../../Loading/Loading';
import TeamListPage from './TeamListPage';

export default function TeamListPageContainer() {
  const history = useHistory();
  const [teamListPage, setTeamListPage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const teamList = await getTeamsList();
    setTeamListPage(teamList.teams);
    setLoading(false);
  }, []);

  const handleClickTeam = (id) => {
    history.push(`/team-calendar/${id}`);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TeamListPage onClickTeam={handleClickTeam} teams={teamListPage} />
      )}
    </>
  );
}
