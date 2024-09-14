import React, { useState } from 'react';

interface MovieSearchProps {
  onSearch: (query: string) => void;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
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
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default MovieSearch;
