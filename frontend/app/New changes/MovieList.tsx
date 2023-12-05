import React, { useState } from 'react';
import './MovieList.css';

import cover from './assets/download.jpg';

const MovieList = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', imageUrl: cover, description: 'A mind-bending sci-fi thriller directed by Christopher Nolan.' },
    { id: 2, title: 'The Shawshank Redemption', imageUrl: cover, description: 'A powerful drama based on Stephen King\'s novella.' },
    { id: 3, title: 'The Dark Knight', imageUrl: cover, description: 'The iconic superhero film directed by Christopher Nolan.' },
    { id: 4, title: 'Pulp Fiction', imageUrl: cover, description: 'Quentin Tarantino\'s masterpiece of crime and redemption.' },
    { id: 5, title: 'Forrest Gump', imageUrl: cover, description: 'A heartwarming tale of an extraordinary life.' },
  ]);

  return (
    <div className='movie-list-container'>
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
