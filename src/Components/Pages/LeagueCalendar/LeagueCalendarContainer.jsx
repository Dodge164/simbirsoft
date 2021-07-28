/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getLeagueCalendarPage } from '../../../Api/http';
import Loading from '../../Loading/Loading';
import Searching from '../../Searching/Searching';
import LeagueCalendarPage from './LeagueCalendarPage';

export default function LeagueCalendarPageContainer({ leagueId }) {
  const [leagueCalendarPage, setLeagueCalendarPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(async () => {
    const calendarLeague = await getLeagueCalendarPage(leagueId);
    setLeagueCalendarPage(calendarLeague);
    setLoading(false);
  }, []);

  const handleSearchStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const handleSearchEndDate = (event) => {
    setEndDate(event.target.value);
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
          <LeagueCalendarPage calendars={filterDates} />
        </>
      )}
    </>
  );
}
