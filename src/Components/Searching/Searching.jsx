/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import s from './Searching.module.scss';

export default function Searching({ onChange1, searchValue, type = 'search' }) {
  return (
    <div className={s.searchMargin}>
      <form className="d-flex">
        <input
          type={type}
          className="form-control me-2"
          placeholder="Search"
          value={searchValue}
          aria-label="Search"
          onChange={(e) => onChange1(e)}
        />
      </form>
    </div>
  );
}
