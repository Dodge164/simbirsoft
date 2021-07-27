/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getTeamCalendarPage } from '../../../Api/http';
import Loading from '../../Loading/Loading';
import TeamCalendarPage from './TeamCalendarPage';

export default function TeamCalendarPageContainer({ teamId }) {
  const [teamCalendarPage, setTeamCalendarPage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const calendarTeam = await getTeamCalendarPage(teamId);
    setTeamCalendarPage(calendarTeam);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TeamCalendarPage calendars={teamCalendarPage.matches} />
      )}
    </>
  );
}
