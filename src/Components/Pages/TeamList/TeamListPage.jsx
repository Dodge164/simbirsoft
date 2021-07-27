/* eslint-disable react/prop-types */

import React from 'react';

import s from './TeamList.module.scss';

export default function TeamListPage({ teams, onClickTeam }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Флаг</th>
          <th scope="col">Имя</th>
          <th scope="col">Адрес</th>
          <th scope="col">Принадлежность</th>
          <th scope="col">Последние события</th>
        </tr>
      </thead>
      <tbody>
        {teams?.map((team) => (
          <tr key={team.id} onClick={() => onClickTeam(team.id)}>
            <td>
              <img className={s.crest} src={team.crestUrl} alt="crest" />
            </td>
            <td>{team.area.name}</td>
            <td>{team.address}</td>
            <td>{team.area.name}</td>
            <td>{team.lastUpdated.slice(0, 10)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
