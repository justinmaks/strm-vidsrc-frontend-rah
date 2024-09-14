import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import MoviePlayerPage from './components/MoviePlayerPage';
import axios from 'axios';
import './App.css';

interface Movie {
  id: number;
  title: string;
  posterPath: string; // Add posterPath to the movie interface
}

const TMDB_API_KEY = ''; // Replace with your TMDB API key
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // TMDb poster base URL

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
      );

      const movieData = response.data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.title,
        posterPath: movie.poster_path ? `${POSTER_BASE_URL}${movie.poster_path}` : '', // Full URL for the poster image
      }));

      setMovies(movieData);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>MOVIE SEARCH</h1>
              <MovieSearch onSearch={handleSearch} />
              <MovieList movies={movies} />
            </>
          }
        />
        <Route path="/movie/:id" element={<MoviePlayerPage />} />
      </Routes>
    </Router>
  );
};

export default App;