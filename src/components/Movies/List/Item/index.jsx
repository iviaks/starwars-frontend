import React from 'react';
import classnames from 'classnames';

import { dateFormat } from 'utils/dates';

import './style.scss';

export default ({ movie, selected }) => {
  const date = new Date(movie.release);
  const image = movie.media.filter(e => e.type === 'image')[0];

  return (
    <div className={classnames('MovieList-Item', { selected })}>
      <div className="MovieList-Item-line">
        <div className="MovieList-Item-line-inner" />
      </div>
      <div
        className="MovieList-Item-photo"
        style={{
          backgroundImage: `url('${image.src}')`,
          top: `${movie.top}%`
        }}
      >
        <div className="MovieList-Item-photo-label">{movie.title}</div>
      </div>
      <div className="MovieList-Item-date">{dateFormat(date)}</div>
    </div>
  );
};
