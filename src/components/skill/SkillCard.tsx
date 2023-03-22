import React from "react";

interface Props {
	name: string;
	xpath: string;
}

const SkillCard = ({ name, xpath }: Props) => {
	return (
		<div className="skills_card">
			<img src={`/${xpath}.svg`} alt={name} />
			<p>{name}</p>
		</div>
	);
};

export default SkillCard;
