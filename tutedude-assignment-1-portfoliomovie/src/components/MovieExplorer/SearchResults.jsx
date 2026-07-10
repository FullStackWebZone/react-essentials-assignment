import React from 'react';
import Button from '../ui/Button.jsx';

function SearchResults(props) {
  return (
    <div className="middle-status-bar">
      <div className="results-counter">
        {props.totalResultNumber} results for "{props.currentSearchedText}"
      </div>
      
      <div className="quick-helper">
        <Button label="No input → show all" />
        <Button label="No match → show empty state" />
      </div>
    </div>
  );
}

export default SearchResults;