import React from 'react';
import { Heart } from 'lucide-react';

function FavoritesList(props) {
  return (
    <div className="favorites-movie-listing" style={{display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {props.favoriteList.length === 0 ? (
        <p className="empty-favs-alert-text">No favorites</p>
      ) : (
        props.favoriteList.map(function(f) {
          return (
            <div 
              key={f.id} 
              className="favorite-movie-btn" 
              style={{display: 'flex', alignItems: 'center', gap: '6px' }}
              
            >
              <Heart size={12} onClick={() => props.toggleFavorite(f)} fill="#ef4444" color="#ef4444" className="cursor-pointer" />
              {f.title} ({f.year})
            </div>
          );
        })
      )}
    </div>
  );
}

export default FavoritesList;