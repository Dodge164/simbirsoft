/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getTeamsList } from '../../../Api/http';
import Loading from '../../Loading/Loading';
import Pagination from '../../Pagination/Pagination';
import Searching from '../../Searching/Searching';
import TeamListPage from './TeamListPage';

export default function TeamListPageContainer() {
  const history = useHistory();
  const [teamListPage, setTeamListPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [teamsPerPage] = useState(10);

  useEffect(async () => {
    const teamList = await getTeamsList();
    setTeamListPage(teamList.teams);
    setLoading(false);
  }, []);

  const handleClickTeam = (id) => {
    history.push(`/team-calendar/${id}`);
  };

  const handleSearchChange = (event) => {
    setValue(event.target.value);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const filterTeams = teamListPage.filter((team) =>
    team.shortName.toLowerCase().includes(value.toLowerCase()),
  );

  const lastTeamIndex = currentPage * teamsPerPage;
  const firstTeamIndex = lastTeamIndex - teamsPerPage;
  const currentTeams = filterTeams.slice(firstTeamIndex, lastTeamIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Searching onChange1={handleSearchChange} searchValue={value} />
          <TeamListPage onClickTeam={handleClickTeam} teams={currentTeams} />
          <Pagination
            onNextClick={handleNext}
            onPreviousClick={handlePrevious}
            itemsPerPage={teamsPerPage}
            totalItems={filterTeams.length}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
}
