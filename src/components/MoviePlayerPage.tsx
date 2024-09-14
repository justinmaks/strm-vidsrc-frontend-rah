import React from 'react';
import { useParams } from 'react-router-dom';

const MoviePlayerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the movie ID from the URL
  const embedUrl = `https://player.vidsrc.nl/embed/movie/${id}`; // Embed link

  return (
    <div className="movie-player-container">
      <h1>Now Playing</h1>
      <div className="iframe-wrapper">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          allowFullScreen
          title="Movie Player"
        />
      </div>
    </div>
  );
};

export default MoviePlayerPage;
