/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';
import { getLeagueList } from '../../../Api/http';
import { useHistory } from 'react-router-dom';

export default function LeaguePageApp() {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [leagueListPage, setLeagueListPage] = useState([]);

  useEffect(async () => {
    const leagueList = await getLeagueList();
    setLeagueListPage(leagueList.competitions);
  }, []);

  const handleClickLeague = (id) => history.push(`/league-calendar/${id}`);

  console.log('LeagueListPage', leagueListPage);
  return (
    <>
      <div>
        На текущем аккаунте для более подробного просмотра доступны только
        <p>UEFA Champions League</p>
        <p>European Championship</p>
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
          {leagueListPage?.map((item) => (
            <tr key={item?.id} onClick={() => handleClickLeague(item?.id)}>
              <td>{item?.id}</td>
              <td>{item.name}</td>
              <td>{item.area.name}</td>
              <td>{item.currentSeason?.startDate}</td>
              <td>{item.currentSeason?.endDate}</td>
              <td>{item.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
