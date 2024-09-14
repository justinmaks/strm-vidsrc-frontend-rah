import React from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  posterPath: string;
  type: 'movie' | 'tv'; // Distinguish between movie and TV show
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div id="results">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link
            to={
              movie.type === 'movie'
                ? `/movie/${movie.id}`
                : `/tv/${movie.id}/season/1/episode/1` // Default to season 1, episode 1 for TV shows
            }
          >
            <img
              src={movie.posterPath || 'https://via.placeholder.com/200x300?text=No+Image'}
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
