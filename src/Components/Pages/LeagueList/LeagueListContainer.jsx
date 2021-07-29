/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getLeagueList } from '../../../Api/http';
import Loading from '../../Loading/Loading';
import Pagination from '../../Pagination/Pagination';
import Searching from '../../Searching/Searching';
import LeagueListPage from './LeagueListPage';

const queryString = require('query-string');

export default function LeagueListPageContainer() {
  const history = useHistory();
  const [leagueListPage, setLeagueListPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [leaguesPerPage] = useState(10);

  const [query, setQuery] = useState(queryString.parse(window.location.search));

  useEffect(async () => {
    const leagueList = await getLeagueList();
    setLeagueListPage(leagueList.competitions);
    if (query.search) {
      setValue(query.search);
    }
    if (query.currentPage) {
      setCurrentPage(query.currentPage);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    history.push({
      pathname: window.location.pathname,
      search: `?${queryString.stringify(query)}`,
    });
  }, [query]);

  useEffect(() => {
    setQuery((prev) => {
      return { ...prev, currentPage };
    });
  }, [currentPage]);

  const handleClickLeague = (id) => {
    history.push(`/league-calendar/${id}`);
  };

  const handleSearchChange = (event) => {
    setCurrentPage(1);
    setValue(event.target.value);
    setQuery((prev) => {
      return { ...prev, search: event.target.value };
    });
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const filterLeagues = leagueListPage.filter(
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

  const lastLeagueIndex = currentPage * leaguesPerPage;
  const firstLeagueIndex = lastLeagueIndex - leaguesPerPage;
  const currentLeagues = filterLeagues.slice(firstLeagueIndex, lastLeagueIndex);

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
          <LeagueListPage
            onClickLeague={handleClickLeague}
            competitions={currentLeagues}
          />
          <Pagination
            onNextClick={handleNext}
            onPreviousClick={handlePrevious}
            itemsPerPage={leaguesPerPage}
            totalItems={filterLeagues.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  );
}
