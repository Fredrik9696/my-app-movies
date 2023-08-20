import React, { useState } from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';

function App() {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState('title'); // Default sorting by title
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting in ascending order

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleRemove = (index) => { //
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  const handleSortChange = (event) => {
    const newSortBy = event.target.value;
    setSortBy(newSortBy);
  };

  const handleOrderChange = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  const sortedMovies = [...movies].sort((a, b) => {
    const comparison = sortBy === 'title' ? a.title.localeCompare(b.title) : a.rating - b.rating;
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  return (
    <div className="container">
      <h1 className="mt-4">Min filmlista</h1>
      <MovieForm addMovie={addMovie} />

      <div className="sort-controls mt-3">
        <label htmlFor="sort" className="me-2">
          Sortera efter:
        </label>
        <select id="sort" value={sortBy} onChange={handleSortChange} className="form-select me-2">
          <option value="title">Alfabetisk ordning</option>
          <option value="rating">Betyg</option>
        </select>

        <button className="btn btn-primary" onClick={handleOrderChange}>
          {sortOrder === 'asc' ? 'Stigande' : 'Fallande'}
        </button>
      </div>

      <hr className="my-4" />

      <h2 className="mb-3">Filmer</h2>
      <ul id="movies" className="list-group">
        {sortedMovies.map((movie, index) => (
          <Movie key={index} item={movie} removeMovie={() => handleRemove(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;
