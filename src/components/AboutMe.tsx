import React from "react";
import { shallow } from "zustand/shallow";
import { langText } from "../data/langText";
import { useConfigStore } from "../store/config";
import "../styles/AboutMe.css";
import Redes from "./about/Redes";

const AboutMe = () => {
	const { lang } = useConfigStore((state) => state, shallow);

	return (
		<div className="about mx" id="about">
			<div className="about_col">
				<h3 className="about_title">
					{lang === "es" ? langText.aboutTitle.es : langText.aboutTitle.en}
				</h3>

				<p className="about_text">
					{lang === "es" ? langText.aboutText.es : langText.aboutText.en}
				</p>
			</div>

			<div className="about_col">
				<p>
					<box-icon name="pin" color="#1d915f"></box-icon>
					{lang === "es" ? langText.aboutStatus.es : langText.aboutStatus.en}
				</p>
				<p>
					<box-icon name="pin" color="#1d915f"></box-icon>
					{lang === "es"
						? langText.aboutUbication.es
						: langText.aboutUbication.en}
				</p>
				<Redes />
			</div>
		</div>
	);
};

export default AboutMe;
