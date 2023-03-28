import React from "react";
import { shallow } from "zustand/shallow";
import { langText } from "../../data/langText";
import { useConfigStore } from "../../store/config";
import "../../styles/Nav.css";

const Nav = () => {
	const { lang } = useConfigStore((state) => state, shallow);

	return (
		<nav className="nav">
			<ul className="nav_list">
				<li className="nav_item">
					<a href="#">
						<box-icon name="home" size="cssSize"></box-icon>
						<span>
							{lang === "es" ? langText.navHome.es : langText.navHome.en}
						</span>
					</a>
				</li>
				<li className="nav_item">
					<a href="#about">
						<box-icon name="user" size="cssSize"></box-icon>
						<span>
							{lang === "es" ? langText.navAbout.es : langText.navAbout.en}
						</span>
					</a>
				</li>
				<li className="nav_item">
					<a href="#services">
						<box-icon name="bookmark" size="cssSize"></box-icon>
						<span>
							{lang === "es" ? langText.navService.es : langText.navService.en}
						</span>
					</a>
				</li>
				<li className="nav_item">
					<a href="#projects">
						<box-icon name="book" size="cssSize"></box-icon>
						<span>
							{lang === "es"
								? langText.navProjects.es
								: langText.navProjects.en}
						</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
