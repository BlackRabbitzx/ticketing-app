import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieByID from "@/app/api/getMovieById";
interface Movie {
  title: string;
  genre: string;
  release_date: string;
  duration: string;
  description: string;
  image_url: string;
}

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | undefined>();

  useEffect(() => {
    if (!id) return;

    const getMovie = async () => {
      // Assuming getProductByID is a function that fetches a movie by ID
      const response = await getMovieByID(id);
      if (response === -1) return;

      setMovie(response);
    };

    getMovie();
  }, [id]);

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>Genre: {movie.genre}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Duration: {movie.duration}</p>
          <p>Description: {movie.description}</p>
          <img src={movie.image_url} alt={movie.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
