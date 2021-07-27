/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { getLeagueCalendarPage } from '../../../Api/http';

export default function LeagueCalendarPage(props) {
  const { leagueId } = props;

  const [calendarLeaguePage, setCalendarLeaguePage] = useState([]);

  useEffect(async () => {
    const calendarLeague = await getLeagueCalendarPage(leagueId);
    setCalendarLeaguePage(calendarLeague);
    const msUTC = Date.parse(calendarLeaguePage.lastUpdated);
    // console.log('date', msUTC);
    const date = new Date(msUTC);
    // console.log('date', date);
    // console.log('leagueCalendarPage', calendarLeague);
  }, []);

  return (
    <>
      {/* <div>Последнее обновление данных: {date}</div> */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Дата начала</th>
            <th scope="col">Дата окончания</th>
          </tr>
        </thead>
        <tbody>
          {calendarLeaguePage.seasons?.map((league) => (
            <tr key={league?.id}>
              <td>{league?.id}</td>
              <td>{league.startDate}</td>
              <td>{league.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
