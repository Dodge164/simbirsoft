/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { getTeamCalendarPage } from '../../../Api/http';

export default function TeamCalendarPage(props) {
  const { teamId } = props;

  const [calendarTeamPage, setCalendarTeamPage] = useState([]);

  useEffect(async () => {
    const calendarTeam = await getTeamCalendarPage(teamId);
    setCalendarTeamPage(calendarTeam);
    console.log('teamCalendarPage', calendarTeam);
  }, []);

  return (
    <>
      {/* <div>Последнее обновление данных: {date}</div> */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Статус</th>
            <th scope="col">Команда хозяев</th>
            <th scope="col">Команда гостей</th>
            <th scope="col">Дата события</th>
          </tr>
        </thead>
        <tbody>
          {calendarTeamPage.matches?.map((team) => (
            <tr key={team?.id}>
              <td>{team?.status}</td>
              <td>{team.homeTeam.name}</td>
              <td>{team.awayTeam.name}</td>
              <td>{team.utcDate.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
