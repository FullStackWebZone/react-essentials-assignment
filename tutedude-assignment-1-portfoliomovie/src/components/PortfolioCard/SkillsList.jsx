import React from 'react';
import Badge from '../ui/Badge';

function SkillsList(props) {
  const skillsList = props.profileSkillsList || [];

  return (
    <div className="portfolio-skills">
      <h4 className="portfolio-skills-title">Skills</h4>
      <div className="portfolio-skills-list">
        {skillsList.map(function(singleSkill, index) {
          return (
            <Badge key={index} text={singleSkill} useForSkills={true} />
          );
        })}
      </div>
    </div>
  );
}

export default SkillsList;