import React from 'react';
import { Star } from 'lucide-react';

function Badge(props) {
  if (props.useForSkills === true) {
    return (
      <span className="profile-skills">
        {props.text}
      </span>
    );
  }

  return (
    <div className="rating-square-badge">
      <Star size={12} fill="white" color="white" />
      {props.text}
    </div>
  );
}

export default Badge;