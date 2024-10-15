import React from 'react';
import { useParams } from 'react-router-dom';

const MoviePlayerPage: React.FC = () => {
  const { id, season, episode } = useParams<{
    id: string;
    season?: string;
    episode?: string;
  }>();

  // Determine if it's a TV show by checking for season and episode
  const isTVShow = Boolean(season && episode);
  const embedUrl = isTVShow
    ? `https://player.vidsrc.nl/embed/tv/${id}/${season}/${episode}`
    : `https://player.vidsrc.nl/embed/movie/${id}`;

  return (
    <div className="movie-player-container">
      <h1>Now Playing</h1>
      <div className="iframe-wrapper">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          allowFullScreen
          title="Movie/Show Player"
        />
      </div>
    </div>
  );
};

export default MoviePlayerPage;
