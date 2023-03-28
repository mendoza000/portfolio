import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useConfigStore } from "../store/config";
import { shallow } from "zustand/shallow";
import { langText } from "../data/langText";

interface Props {
	img: string;
	title: string;
	skill: string;
	urlWeb: string;
	urlRepo: string;
}

const Project = ({ img, title, skill, urlWeb, urlRepo }: Props) => {
	const { lang } = useConfigStore((state) => state, shallow);

	const hover = useRef<any>();
	const titleP = useRef<any>();
	const line = useRef<any>();
	const skillP = useRef<any>();
	const btn1 = useRef<any>();
	const btn2 = useRef<any>();
	const info = useRef<any>();
	const card = useRef<any>();
	const image = useRef<any>();

	useEffect(() => {
		gsap.to(hover.current, {
			opacity: 0,
		});
		gsap.to(titleP.current, {
			y: -50,
		});
		gsap.to(line.current, {
			y: -50,
		});
		gsap.to(skillP.current, {
			y: 50,
		});
		gsap.to(btn1.current, {
			x: -150,
		});
		gsap.to(btn2.current, {
			x: 150,
		});
		gsap.to(info.current, {
			opacity: 0,
			zIndex: -1,
			display: "none",
		});
		gsap.to(card.current, {
			minHeight: "16rem",
			maxHeight: "16rem",
		});
	}, []);

	const viewHover = () => {
		gsap.to(hover.current, {
			opacity: 1,
			duration: 0.5,
		});
		gsap.to(titleP.current, {
			y: 0,
			duration: 0.7,
		});
		gsap.to(line.current, {
			y: 0,
			duration: 0.6,
		});
		gsap.to(skillP.current, {
			y: 0,
			duration: 0.7,
		});
		gsap.to(btn1.current, {
			x: 0,
			duration: 0.7,
		});
		gsap.to(btn2.current, {
			x: 0,
			duration: 0.7,
		});

		// gsap.to(info.current, {
		// 	opacity: 1,
		// 	zIndex: 1,
		// 	display: '',
		// 	duration: 1.0
		// })
		// gsap.to(card.current, {
		// 	minHeight: '35rem',
		// 	maxHeight: '35rem',
		// 	duration: 1.0
		// })
		// gsap.to(image.current, {
		// 	height: '18rem'
		// })
	};
	const noViewHover = () => {
		gsap.to(hover.current, {
			opacity: 0,
			duration: 0.5,
		});
		gsap.to(titleP.current, {
			y: -50,
			duration: 0.7,
		});
		gsap.to(line.current, {
			y: -50,
			duration: 0.6,
		});
		gsap.to(skillP.current, {
			y: 50,
			duration: 0.7,
		});
		gsap.to(btn1.current, {
			x: -150,
			duration: 0.7,
		});
		gsap.to(btn2.current, {
			x: 150,
			duration: 0.7,
		});

		// gsap.to(info.current, {
		// 	opacity: 0,
		// 	zIndex: -1,
		// 	display: 'none',
		// })
		// gsap.to(card.current, {
		// 	minHeight: '16rem',
		// 	maxHeight: '16rem',
		// })
	};

	return (
		<div className="projects_card" ref={card}>
			<img src={img} alt="img project" ref={image} />

			<div
				className="hover"
				ref={hover}
				onMouseEnter={viewHover}
				onMouseLeave={noViewHover}
			>
				<p className="project_card_title" ref={titleP}>
					{title}
				</p>
				<div className="project_card_line" ref={line}></div>
				<p className="project_card_skill" ref={skillP}>
					{skill}
				</p>

				<div className="project_card_btnContainer">
					<a
						className="project_card_btn"
						href={urlWeb}
						target="_blank"
						ref={btn1}
					>
						<box-icon name="rocket"></box-icon>
						{lang === "es"
							? langText.projectButtons.es[0]
							: langText.projectButtons.en[0]}
					</a>
					<a
						className="project_card_btn"
						href={urlRepo}
						target="_blank"
						ref={btn2}
					>
						<box-icon name="planet"></box-icon>
						{lang === "es"
							? langText.projectButtons.es[1]
							: langText.projectButtons.en[1]}
					</a>
				</div>
			</div>

			<p className="project_info" ref={info}>
				<span className="project_info-title">
					<box-icon name="party"></box-icon>
					INFORMACIÓN
				</span>
			</p>
		</div>
	);
};

export default Project;
