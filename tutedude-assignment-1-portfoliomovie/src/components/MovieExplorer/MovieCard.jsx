import React from 'react';
import Badge from '../ui/Badge';
import { Heart } from 'lucide-react';

function MovieCard(props) {
  const movie = props.movieData;

  return (
    <div className="single-movie-card">
      <div className="movie-left-details-block">
        <div className="movie-card-header-row">
          <span className="movie-card-title">{movie.title}</span>
          <span className="movie-meta-info">{movie.year} · {movie.genre}</span>
        </div>
        
        <div className="movie-ratings-and-tags">
          <Badge text={movie.rating} />
          <span className="movie-tags-text">{movie.tags}</span>
        </div>
      </div>

      <div className="movie-right-action-block">
        <button 
          
          className={props.isFavorite ? "favorited-red-btn" : "unfavorited-white-btn"}
          style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
        >
          <Heart size={14} onClick={() => props.toggleFavorite(movie)} className="cursor-pointer"  fill={props.isFavorite ? "white" : "none"} color={props.isFavorite ? "white" : "#64748b"} />
          {props.isFavorite ? "Favorited" : "Favorite"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;