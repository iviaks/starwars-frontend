import React from 'react';

import MovieListItem from './Item';

import './style.scss';

export default ({ movies = [], selectedCharacter }) => (
  <div className="MovieList">
    {movies.map((movie, index) => {
      return (
        <MovieListItem
          selected={
            selectedCharacter == null ||
            movie.cast.filter(e => e.id === selectedCharacter).length > 0
          }
          key={index}
          movie={movie}
        />
      );
    })}
  </div>
);
