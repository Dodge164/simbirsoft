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
            <th scope="col">id</th>
            <th scope="col">Дата начала</th>
            <th scope="col">Дата окончания</th>
          </tr>
        </thead>
        <tbody>
          {calendarTeamPage.seasons?.map((team) => (
            <tr key={team?.id}>
              <td>{team?.id}</td>
              <td>{team.startDate}</td>
              <td>{team.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
