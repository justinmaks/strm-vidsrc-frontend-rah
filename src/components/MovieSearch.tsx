import React, { useState } from 'react';

interface MovieSearchProps {
  onSearch: (query: string, type: 'movie' | 'tv') => void; // Accept both query and type
}

const MovieSearch: React.FC<MovieSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<'movie' | 'tv'>('movie'); // Default to 'movie'

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query, type); // Call onSearch with both query and type
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie or show"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value as 'movie' | 'tv')}>
        <option value="movie">Movies</option>
        <option value="tv">TV Shows</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default MovieSearch;
