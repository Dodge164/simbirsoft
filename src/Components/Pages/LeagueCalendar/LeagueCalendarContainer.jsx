/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getLeagueCalendarPage } from '../../../Api/http';
import Loading from '../../Loading/Loading';
import LeagueCalendarPage from './LeagueCalendarPage';

export default function LeagueCalendarPageContainer({ leagueId }) {
  const [leagueCalendarPage, setLeagueCalendarPage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const calendarLeague = await getLeagueCalendarPage(leagueId);
    setLeagueCalendarPage(calendarLeague);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LeagueCalendarPage calendars={leagueCalendarPage.seasons} />
      )}
    </>
  );
}
