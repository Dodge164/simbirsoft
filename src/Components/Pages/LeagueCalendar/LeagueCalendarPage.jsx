/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function LeagueCalendarPage({ calendars }) {
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
          {calendars?.map((league) => (
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
