/* eslint-disable react/prop-types */
import React from 'react';

export default function LeagueListPage({ competitions, onClickLeague }) {
  return (
    <>
      <div>
        На текущем аккаунте для более подробного просмотра доступны только
        <ul>
          <li>UEFA Champions League</li>
          <li>European Championship</li>
          <li>FIFA World Cup</li>
        </ul>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Название</th>
            <th scope="col">Страна</th>
            <th scope="col">Дата начала</th>
            <th scope="col">Дата окончания</th>
            <th scope="col">Последнее обновление</th>
          </tr>
        </thead>
        <tbody>
          {competitions?.map((league) => (
            <tr key={league?.id} onClick={() => onClickLeague(league?.id)}>
              <td>{league?.id}</td>
              <td>{league.name}</td>
              <td>{league.area.name}</td>
              <td>{league.currentSeason?.startDate}</td>
              <td>{league.currentSeason?.endDate}</td>
              <td>{league.lastUpdated.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
