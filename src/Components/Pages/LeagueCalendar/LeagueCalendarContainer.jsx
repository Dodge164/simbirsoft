/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getLeagueCalendarPage } from '../../../Api/http';
import LeagueCalendarPage from './LeagueCalendarPage';

export default function LeagueCalendarPageContainer({ leagueId }) {
  const [leagueCalendarPage, setLeagueCalendarPage] = useState([]);

  useEffect(async () => {
    const calendarLeague = await getLeagueCalendarPage(leagueId);
    console.log('cl', calendarLeague);
    setLeagueCalendarPage(calendarLeague);
  }, []);

  return <LeagueCalendarPage calendars={leagueCalendarPage.seasons} />;
}
