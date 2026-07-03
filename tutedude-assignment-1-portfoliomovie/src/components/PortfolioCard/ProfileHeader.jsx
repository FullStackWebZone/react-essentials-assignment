import React from 'react';
import { Sun } from 'lucide-react';

function ProfileHeader(props) {
  return (
    <div className="top-theme-toggle">
      
      <button 
        className="white-rounded-toggle-btn" 
        onClick={props.onToggleTheme}
        style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
      >
        <Sun size={22} /> Toggle
      </button>
    </div>
  );
}

export default ProfileHeader;