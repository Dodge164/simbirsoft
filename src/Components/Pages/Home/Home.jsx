import React from 'react';
import s from './Home.module.scss';

export default function Home() {
  return (
    <div className={s.jumbotron}>
      <div className="container">
        <h1 className="display-4">Welcome to Football DB</h1>
        <p className="lead">On June 27, 2018 was released the API version 2</p>

        <p className="lead">
          On the current account, only three leagues are available for more
          detailed viewing:
          <ul>
            <li>UEFA Champions League</li>
            <li>European Championship</li>
            <li>FIFA World Cup</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
