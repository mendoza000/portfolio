import React from "react";

const SkillCard = ({ name, xpath }) => {
  return (
    <div className="skills_card">
      <img src={`/${xpath}.svg`} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default SkillCard;
