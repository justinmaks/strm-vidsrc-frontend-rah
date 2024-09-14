import React from 'react';

interface Movie {
  id: number; // TMDb id
  title: string;
}

interface MovieListProps {
  movies: Movie[];
  onSelectMovie: (movieId: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onSelectMovie }) => {
  return (
    <div id="results">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card" onClick={() => onSelectMovie(movie.id)}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
