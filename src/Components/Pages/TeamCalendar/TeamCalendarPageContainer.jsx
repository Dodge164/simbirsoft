/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getTeamCalendarPage } from '../../../Api/http';
import Loading from '../../Loading/Loading';
import Searching from '../../Searching/Searching';
import TeamCalendarPage from './TeamCalendarPage';

export default function TeamCalendarPageContainer({ teamId }) {
  const [teamCalendarPage, setTeamCalendarPage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(async () => {
    const calendarTeam = await getTeamCalendarPage(teamId);
    setTeamCalendarPage(calendarTeam);
    setLoading(false);
  }, []);

  const handleSearchStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const handleSearchEndDate = (event) => {
    setEndDate(event.target.value);
  };
  let filterDates = teamCalendarPage.matches;
  if (startDate && endDate) {
    filterDates = teamCalendarPage?.matches?.filter(
      (team) => team.utcDate >= startDate && team.utcDate <= endDate,
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
          <TeamCalendarPage calendars={filterDates} />
        </>
      )}
    </>
  );
}
