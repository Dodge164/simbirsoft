/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function LeagueCalendarPage({ calendars, onClickLeagueTeams }) {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Дата начала</th>
            <th scope="col">Дата окончания</th>
          </tr>
        </thead>
        <tbody>
          {calendars?.map((league) => (
            <tr
              key={league?.id}
              onClick={() => onClickLeagueTeams(league?.startDate)}>
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
