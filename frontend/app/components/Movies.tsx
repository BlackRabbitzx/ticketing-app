import React, { useState } from 'react';
import './Movies.css';
import Image from 'next/image';
import cover from './assets/download.jpg';

const Movies = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', imageUrl: cover, description: 'A mind-bending sci-fi thriller directed by Christopher Nolan.' },
    { id: 2, title: 'The Shawshank Redemption', imageUrl: cover, description: 'A powerful drama based on Stephen King\'s novella.' },
    { id: 3, title: 'The Dark Knight', imageUrl: cover, description: 'The iconic superhero film directed by Christopher Nolan.' },
    { id: 4, title: 'Pulp Fiction', imageUrl: cover, description: 'Quentin Tarantino\'s masterpiece of crime and redemption.' },
    { id: 5, title: 'Forrest Gump', imageUrl: cover, description: 'A heartwarming tale of an extraordinary life.' },
  ]);

  const handleItemClick = (movieId: number) => {
    console.log(`Clicked on movie with ID: ${movieId}`);
  };

  return (
    <div className='movie-list-container'>
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <a key={movie.id} className="movie-item" onClick={() => handleItemClick(movie.id)}>
            <Image src={movie.imageUrl} alt={movie.title} width={100} height={150} />
            <h3>{movie.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Movies;