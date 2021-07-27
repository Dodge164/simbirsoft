/* eslint-disable react/prop-types */
import React from 'react';

export default function TeamCalendarPage({ calendars }) {
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
          {calendars?.map((team) => (
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
