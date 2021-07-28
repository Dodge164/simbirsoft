/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import s from './Searching.module.scss';
// import TeamListPageContainer from '../Pages/TeamList/TeamListContainer';

export default function Searching({ onChange1, searchValue }) {
  return (
    <div className={s.searchMargin}>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={searchValue}
          aria-label="Search"
          onChange={(e) => onChange1(e)}
        />
      </form>
    </div>
  );
}
