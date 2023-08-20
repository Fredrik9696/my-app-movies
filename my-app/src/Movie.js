import React from 'react';

function Movie({ item, removeMovie }) {
  return (
    <li className="list-group-item">
      {item.title}
      {Array.from({ length: item.rating }).map((_, index) => (
        <img key={index} src="star.png" alt="Star" />
      ))}
      <img
        src="delete.png"
        alt="Delete"
        className="btn-delete"
        onClick={removeMovie}
      />
    </li>
  );
}

export default Movie;
