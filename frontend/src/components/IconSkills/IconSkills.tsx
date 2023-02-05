import React from 'react';
import './IconSkills.scss';

const IconSkills = ({ icon }: any): JSX.Element => {
  return (
    <div className="icon-skills-container">
      <img className="icon-skills" src={icon} alt="" />
    </div>
  );
};

export default IconSkills;
