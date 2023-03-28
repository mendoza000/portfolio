import React from "react";
import { shallow } from "zustand/shallow";
import { langText } from "../data/langText";
import { useConfigStore } from "../store/config";
import "../styles/Skills.css";
import SkillCard from "./skill/SkillCard";

const Skills = () => {
	const { lang } = useConfigStore((state) => state, shallow);

	return (
		<div className="skills mx">
			<h3 className="skills_title">
				<box-icon name="planet" color="#1d915f"></box-icon>
				{lang === "es" ? langText.skillTitle.es : langText.skillTitle.en}
			</h3>

			<div className="skills_list">
				<SkillCard name="HTML5" xpath={"html5"} />
				<SkillCard name="CSS3" xpath={"css3"} />
				<SkillCard name="JavaScript" xpath={"javascript"} />
				<SkillCard name="NodeJS" xpath={"nodedotjs"} />
				<SkillCard name="Express" xpath={"express"} />
				<SkillCard name="Git" xpath={"git"} />
				<SkillCard name="MongoDB" xpath={"mongodb"} />
				<SkillCard name="ReactJS" xpath={"react"} />
				<SkillCard name="Redux" xpath={"redux"} />
				<SkillCard name="Sass" xpath={"sass"} />
				<SkillCard name="Terminal" xpath={"terminal"} />
				<SkillCard name="NextJS" xpath={"nextdotjs"} />
				<SkillCard name="Vite" xpath={"vite"} />
				<SkillCard name="TypeScript" xpath={"typescript"} />
				<SkillCard name="TailwindCSS" xpath={"tailwindcss"} />
				<SkillCard name="Golang" xpath={"go"} />
				<SkillCard name="MySQL" xpath={"mysql"} />
				<SkillCard name="Vue.js" xpath={"vuedotjs"} />
			</div>
		</div>
	);
};

export default Skills;
