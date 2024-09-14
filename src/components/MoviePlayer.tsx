import React from 'react';

interface MoviePlayerProps {
  movieId: number; // TMDb ID of the selected movie
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ movieId }) => {
  const embedUrl = `https://player.vidsrc.nl/embed/movie/${movieId}`;

  return (
    <div>
      <iframe
        src={embedUrl}
        width="800"
        height="450"
        allowFullScreen
        title="Movie Player"
      />
    </div>
  );
};

export default MoviePlayer;
