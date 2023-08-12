import React from "react";
import Project from "./Project";
import "../styles/Projects.css";
import { useConfigStore } from "../store/config";
import { shallow } from "zustand/shallow";
import { langText } from "../data/langText";

const Projects = () => {
	const { lang } = useConfigStore((state) => state, shallow);

	return (
		<div className="projects mx" id="projects">
			<h3 className="projects_title">
				<box-icon name="rocket" color="#1d915f"></box-icon>
				{lang === "es" ? langText.projectsTitle.es : langText.projectsTitle.en}
			</h3>

			<div className="projects_list">
				<Project
					img={"your-app-landing.png"}
					title={
						lang === "es"
							? langText.projectsNames.es[6]
							: langText.projectsNames.en[6]
					}
					skill="VUE3 - TAILWIND - VITE - JS"
					urlWeb="https://your-app-landing.vercel.app/"
					urlRepo="https://github.com/mendoza000/your-app-landing"
				/>
				<Project
					img={"my-brand-landing-page.png"}
					title={
						lang === "es"
							? langText.projectsNames.es[5]
							: langText.projectsNames.en[5]
					}
					skill="VUE3 - TAILWIND - VITE - JS"
					urlWeb="https://mybrand000.vercel.app/"
					urlRepo="https://github.com/mendoza000/my-brand-landing-page"
				/>

				<Project
					img={"nival.png"}
					title={
						lang === "es"
							? langText.projectsNames.es[7]
							: langText.projectsNames.en[7]
					}
					skill="NEXTJS - TAILWIND - JS"
					urlWeb="https://nivaldigital.com/"
					urlRepo="https://github.com/mendoza000/nival-digital"
				/>

				<Project
					img={"/avoStore.png"}
					title={
						lang === "es"
							? langText.projectsNames.es[3]
							: langText.projectsNames.en[3]
					}
					skill="JS - NEXTJS - SCSS - REDUX"
					urlWeb="https://avostore000.vercel.app/"
					urlRepo="https://github.com/mendoza000/avo-store"
				/>

				<Project
					img={"/xo.jpeg"}
					title={
						lang === "es"
							? langText.projectsNames.es[2]
							: langText.projectsNames.en[2]
					}
					skill="SASS - JS - VITE - REACT - REDUX"
					urlWeb="https://xo000.vercel.app/"
					urlRepo="https://github.com/mendoza000/xo"
				/>

				<Project
					img={"/journal000.jpeg"}
					title={
						lang === "es"
							? langText.projectsNames.es[1]
							: langText.projectsNames.en[1]
					}
					skill="SASS - JS - VITE - REACT - REDUX - FIREBASE"
					urlWeb="https://journal000.vercel.app/"
					urlRepo="https://github.com/mendoza000/journalapp"
				/>

				<Project
					img={"/lemonFlow.png"}
					title={
						lang === "es"
							? langText.projectsNames.es[4]
							: langText.projectsNames.en[4]
					}
					skill="VUE3 - PINIA - TAILWIND - VITE - JS"
					urlWeb="https://lemon-flow.vercel.app/"
					urlRepo="https://github.com/mendoza000/lemon-flow"
				/>
				<Project
					img={"/rain000.jpeg"}
					title={
						lang === "es"
							? langText.projectsNames.es[0]
							: langText.projectsNames.en[0]
					}
					skill="HTML - CSS - JS - WEBPACK"
					urlWeb="https://mendoza000.github.io/rain000/"
					urlRepo="https://github.com/mendoza000/rain000"
				/>
			</div>
		</div>
	);
};

export default Projects;
