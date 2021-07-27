/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import s from './Navbar.module.scss';

function Navbar() {
  const [burgerState, setBurgerState] = useState(false);
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">Football App</div>
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
            <NavLink className="nav-link" to="/league-list">
              League List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/team-list">
              Team List
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
