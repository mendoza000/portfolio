import React from "react";
import { shallow } from "zustand/shallow";
import { langText } from "../data/langText";
import { useConfigStore } from "../store/config";
import "../styles/Skills.css";
import SkillCard from "./skill/SkillCard";
import {
	CodeOrange,
	BracketsSky,
	Js,
	Node,
	Next,
	Vite,
	Vue,
	Dts,
	Sass,
	Reactjs,
	Git,
	Exe,
	GoMod,
	Tailwind,
	Database,
	CodeGreen,
	CodePurple,
} from "@react-symbols/icons";

const Skills = () => {
	const { lang } = useConfigStore((state) => state, shallow);

	return (
		<div className="skills mx">
			<h3 className="skills_title">
				<box-icon name="planet" color="#1d915f"></box-icon>
				{lang === "es" ? langText.skillTitle.es : langText.skillTitle.en}
			</h3>

			<div className="skills_list">
				<SkillCard name="HTML5" icon={<CodeOrange width={50} height={50} />} />
				<SkillCard name="CSS3" icon={<BracketsSky width={50} height={50} />} />
				<SkillCard name="JavaScript" icon={<Js width={50} height={50} />} />
				<SkillCard name="NodeJS" icon={<Node width={50} height={50} />} />
				<SkillCard name="Express" icon={<CodeGreen width={50} height={50} />} />
				<SkillCard name="Git" icon={<Git width={50} height={50} />} />
				<SkillCard name="MongoDB" icon={<Database width={50} height={50} />} />
				<SkillCard name="ReactJS" icon={<Reactjs width={50} height={50} />} />
				<SkillCard name="Redux" icon={<CodePurple width={50} height={50} />} />
				<SkillCard name="Sass" icon={<Sass width={50} height={50} />} />
				<SkillCard name="Terminal" icon={<Exe width={50} height={50} />} />
				<SkillCard name="NextJS" icon={<Next width={50} height={50} />} />
				<SkillCard name="Vite" icon={<Vite width={50} height={50} />} />
				<SkillCard name="TypeScript" icon={<Dts width={50} height={50} />} />
				<SkillCard
					name="TailwindCSS"
					icon={<Tailwind width={50} height={50} />}
				/>
				<SkillCard name="Golang" icon={<GoMod width={50} height={50} />} />
				<SkillCard name="MySQL" icon={<Database width={50} height={50} />} />
				<SkillCard name="Vue.js" icon={<Vue width={50} height={50} />} />
			</div>
		</div>
	);
};

export default Skills;
