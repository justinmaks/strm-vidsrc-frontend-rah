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
  posterPath: string;
  type: 'movie' | 'tv'; // Identify movie or TV show
}

const TMDB_API_KEY = '';
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string, type: 'movie' | 'tv') => {
    try {
      const endpoint = type === 'movie' ? 'search/movie' : 'search/tv'; // Endpoint for movies or TV
      const response = await axios.get(
        `https://api.themoviedb.org/3/${endpoint}?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
      );

      const movieData = response.data.results.map((item: any) => ({
        id: item.id,
        title: type === 'movie' ? item.title : item.name, // 'title' for movies, 'name' for TV shows
        posterPath: item.poster_path ? `${POSTER_BASE_URL}${item.poster_path}` : '',
        type, // Mark if it's a movie or TV show
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
              <div className="header">
                <h1 className="rahtube-title">RAHTUBE</h1>
                <h2 className="movie-search-title">MOVIE AND SHOW SEARCH</h2>
              </div>
              <MovieSearch onSearch={handleSearch} />
              <MovieList movies={movies} />
            </>
          }
        />
        <Route path="/movie/:id" element={<MoviePlayerPage />} />
        <Route path="/tv/:id/season/:season/episode/:episode" element={<MoviePlayerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
