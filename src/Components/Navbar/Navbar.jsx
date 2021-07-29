/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';
import s from './Navbar.module.scss';

function Navbar() {
  const [burgerState, setBurgerState] = useState(false);
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <Link to="/" className={cn(`navbar-brand ${s.label}`)}>
        Football App
      </Link>
      <button
        onClick={(event) =>
          setBurgerState(event.currentTarget.classList.contains('collapsed'))
        }
        className={cn(`navbar-toggle btn-primary ${s.burger}`, {
          collapsed: !burgerState,
        })}
        type="button"
        dataToggle="collapse"
        dataTarget="#navbarNav"
        ariaControls="navbarNav"
        ariaExpanded="false"
        ariaLabel="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div
        id="navbarNav"
        className={cn('navbar-collapse collapse', { show: burgerState })}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className={s.burger_link}>
              <NavLink className="nav-link" to="/league-list">
                League List
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className={s.burger_link}>
              <NavLink className={`nav-link ${s.burger_link}`} to="/team-list">
                Team List
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
