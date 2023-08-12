import React from "react";

interface Props {
	name: string;
	icon: any;
}

const SkillCard = ({ name, icon }: Props) => {
	return (
		<div className="skills_card">
			{icon}
			<p>{name}</p>
		</div>
	);
};

export default SkillCard;
