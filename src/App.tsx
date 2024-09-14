import React, { useState } from 'react';
import axios from 'axios';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import MoviePlayer from './components/MoviePlayer';
import './App.css';


interface Movie {
  id: number; // This will be the TMDb id
  title: string;
}

const TMDB_API_KEY = ''; // <-- Replace this with your TMDb API key

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
      );

      // Map the movie data into our movie format (id and title)
      const movieData = response.data.results.map((movie: any) => ({
        id: movie.id, // TMDb id
        title: movie.title,
      }));

      setMovies(movieData);
      setSelectedMovieId(null); // Clear player when new search is made
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSelectMovie = (movieId: number) => {
    setSelectedMovieId(movieId);
  };

  return (
    <div className="App">
      <h1>Movie and Show Search</h1>
      <MovieSearch onSearch={handleSearch} />
      <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
      {selectedMovieId && <MoviePlayer movieId={selectedMovieId} />}
    </div>
  );
};

export default App;
