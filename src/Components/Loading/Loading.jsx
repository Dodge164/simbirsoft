/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import s from './Loading.module.scss';

export default function Loading() {
  return (
    <div className={s.laodingCenter}>
      <div className="text-center">
        <div
          className={`spinner-border text-primary ${s.spinnerBig}`}
          role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
