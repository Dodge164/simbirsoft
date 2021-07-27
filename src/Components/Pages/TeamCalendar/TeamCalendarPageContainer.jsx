/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getTeamCalendarPage } from '../../../Api/http';
import TeamCalendarPage from './TeamCalendarPage';

export default function TeamCalendarPageContainer({ teamId }) {
  console.log('teid', teamId);
  const [teamCalendarPage, setTeamCalendarPage] = useState([]);

  useEffect(async () => {
    const calendarTeam = await getTeamCalendarPage(teamId);
    console.log('tc', calendarTeam);
    setTeamCalendarPage(calendarTeam);
  }, []);

  return <TeamCalendarPage calendars={teamCalendarPage.matches} />;
}
