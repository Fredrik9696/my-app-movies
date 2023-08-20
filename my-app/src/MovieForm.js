import React, { useState } from 'react';

function MovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('0'); // Använd en sträng för att matcha option value

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || rating === '0') {
      alert('Du måste fylla i både titel och betyg.');
      return;
    }

    addMovie({ title, rating });
    setTitle('');
    setRating('0'); // Återställ betyget till 0 efter lägg till film
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title">Titel:</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="rating">Betyg:</label>
        <select
          id="rating"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Lägg till film
      </button>
    </form>
  );
}

export default MovieForm;
