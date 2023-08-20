import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <div>
      <h2>Movie List</h2>
      <ul className="list-group">
        {movies.map((movie, index) => (
          <Movie key={index} item={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MovieList;

