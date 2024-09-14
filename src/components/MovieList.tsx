import React from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  posterPath: string; // Add posterPath prop
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div id="results">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movie/${movie.id}`}>
            <img
              src={movie.posterPath || 'https://via.placeholder.com/200x300?text=No+Image'} // Display poster or placeholder
              alt={movie.title}
              className="movie-poster"
            />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
