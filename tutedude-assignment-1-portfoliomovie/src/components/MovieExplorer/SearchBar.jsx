import React from 'react';
import { Search, RotateCcw, X } from 'lucide-react';

function SearchBar(props) {
  return (
    <div className="search-bar-container">
      <div className="search-input">
        <Search className="search-icon" size={22} />
        <input 
          type="text"
          value={props.searchText}
          onChange={(e) => props.setSearchText(e.target.value)}
          placeholder="Search movies..."
          className="native-search-input"
        />
        {props.searchText !== "" && (
          <button onClick={props.resetSearch} className="clear-text">
            <X size={16} />
          </button>
        )}
      </div>

      <button onClick={props.resetSearch} className="reset-button">
        <RotateCcw size={28} /> Reset
      </button>
    </div>
  );
}

export default SearchBar;