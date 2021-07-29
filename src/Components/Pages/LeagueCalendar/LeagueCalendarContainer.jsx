/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getLeagueCalendarPage } from '../../../Api/http';
import Loading from '../../Loading/Loading';
import Searching from '../../Searching/Searching';
import LeagueCalendarPage from './LeagueCalendarPage';

const queryString = require('query-string');

export default function LeagueCalendarPageContainer({ leagueId }) {
  const history = useHistory();
  const [leagueCalendarPage, setLeagueCalendarPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [query, setQuery] = useState(queryString.parse(window.location.search));

  useEffect(async () => {
    const calendarLeague = await getLeagueCalendarPage(leagueId);
    setLeagueCalendarPage(calendarLeague);

    if (query.startDate) {
      setStartDate(query.startDate);
    }
    if (query.endDate) {
      setEndDate(query.endDate);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    history.push({
      pathname: window.location.pathname,
      search: `?${queryString.stringify(query)}`,
    });
  }, [query]);

  const handleSearchStartDate = (event) => {
    setStartDate(event.target.value);
    setQuery((prev) => {
      const newObj = { ...prev };
      newObj.startDate = event.target.value;
      return { ...newObj };
    });
  };

  const handleSearchEndDate = (event) => {
    setEndDate(event.target.value);
    setQuery((prev) => {
      const newObj = { ...prev };
      newObj.endDate = event.target.value;
      return { ...newObj };
    });
  };

  const handleClickLeagueTeams = (date) => {
    history.push(
      `/league-calendar/${leagueId}/teams?season=${date.slice(0, 4)}`,
    );
  };

  let filterDates = leagueCalendarPage.seasons;
  if (startDate && endDate) {
    filterDates = leagueCalendarPage?.seasons?.filter(
      (league) => league.startDate >= startDate && league.endDate <= endDate,
    );
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Searching
            type="date"
            onChange1={handleSearchStartDate}
            searchValue={startDate}
          />
          <Searching
            type="date"
            onChange1={handleSearchEndDate}
            searchValue={endDate}
          />
          <LeagueCalendarPage
            onClickLeagueTeams={handleClickLeagueTeams}
            calendars={filterDates}
          />
        </>
      )}
    </>
  );
}
