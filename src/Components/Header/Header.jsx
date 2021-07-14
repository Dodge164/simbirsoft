import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

function Header() {
  return (
    <div>
      <div className={s.Header}>
        <h3 className={s.HeaderTitle}>
          <Link to="/">Football DB</Link>
        </h3>
        <ul className={s.HeaderList}>
          <li>
            <Link to="/league-list">League List</Link>
          </li>
          <li>
            <Link to="/team-list">TeamList</Link>
          </li>
          <li>
            <Link to="/league-calendar">League Calendar</Link>
          </li>
          <li>
            <Link to="/team-calendar">Team Calendar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
