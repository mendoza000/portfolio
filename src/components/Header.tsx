import React, { useRef, useEffect, useState } from "react";
import Typed from "typed.js";
import { gsap } from "gsap";
import { shallow } from "zustand/shallow";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { animateHeader } from "../helpers/animateHeader";
import { darkMode, ligthMode } from "../helpers/setTheme";
import "../styles/Header.css";
import { useConfigStore } from "../store/config";
import { langText } from "../data/langText";

const Header = () => {
	const [icon, setIcon] = useState("sun");

	const textSpan = useRef<any>();
	const typed = useRef<any>();
	const header = useRef<any>();
	const firstPoint = useRef<HTMLDivElement>(null);
	const secondPoint = useRef<HTMLDivElement>(null);
	const thirdPoint = useRef<HTMLDivElement>(null);
	const fourthPoint = useRef<HTMLDivElement>(null);
	const fifthPoint = useRef<HTMLDivElement>(null);
	const sixthPoint = useRef<HTMLDivElement>(null);
	const seventhPoint = useRef<HTMLDivElement>(null);
	const eighthPoint = useRef<HTMLDivElement>(null);
	const ninethPoint = useRef<HTMLDivElement>(null);
	const tenthPoint = useRef<HTMLDivElement>(null);
	const eleventhPoint = useRef<HTMLDivElement>(null);
	const twoeleventhPoint = useRef<HTMLDivElement>(null);
	const switchCircle = useRef<HTMLDivElement>(null);
	const langButton = useRef<HTMLButtonElement>(null);
	let dark = false;

	const { lang, changeLang } = useConfigStore((state) => state, shallow);

	useEffect(() => {
		const options = {
			strings:
				lang === "es"
					? [...langText.headerAutoType.es]
					: [...langText.headerAutoType.en],
			typeSpeed: 70,
			backSpeed: 70,
			backDelay: 3000,
			loop: true,
			/*startDelay: 1500*/
		};

		typed.current = new Typed(textSpan.current, options);

		return () => {
			typed.current.destroy();
		};
	}, [lang]);

	useEffect(() => {
		animateHeader({
			header,
			firstPoint,
			secondPoint,
			thirdPoint,
			fourthPoint,
			fifthPoint,
			sixthPoint,
			seventhPoint,
			eighthPoint,
			ninethPoint,
			tenthPoint,
			eleventhPoint,
			twoeleventhPoint,
		});
	}, []);

	const setTheme = () => {
		if (icon === "sun") {
			setIcon("moon");
			gsap.to(switchCircle.current, {
				x: 30,
				duration: 0.5,
			});
			darkMode();
		}
		if (icon === "moon") {
			setIcon("sun");
			gsap.to(switchCircle.current, {
				x: 0,
				duration: 0.5,
			});
			ligthMode();
			dark = false;
		}
	};

	const handleSetLang = () => {
		if (lang === "es") {
			changeLang();
			gsap.to(langButton.current, {
				x: 70,
				duration: 0.5,
			});
		}
		if (lang === "en") {
			changeLang();
			gsap.to(langButton.current, {
				x: 0,
				duration: 0.5,
			});
		}
	};

	return (
		<header className="header" ref={header}>
			<div className="header_lang">
				<button
					className="header_lang-button"
					ref={langButton}
					onClick={handleSetLang}
				>
					{lang == "es" ? "Español" : "English"}
				</button>
			</div>
			<h1 className="header_title">
				{lang === "es" ? langText.header.es : langText.header.en}

				<span className="header_title-name">Omar Mendoza</span>
			</h1>
			<p className="header_autoTyped">
				\{">"}
				<span ref={textSpan}></span>
			</p>

			<div onClick={setTheme} className="darkmode">
				<div className="buttonCircle" ref={switchCircle}>
					<box-icon name={icon} size="cssSize"></box-icon>
				</div>
			</div>

			<div className="header_circleFlur"></div>
			<div className="header_circleFlur-last"></div>

			<div className="header_pointEffect" ref={firstPoint}></div>
			<div className="header_pointEffect" ref={secondPoint}></div>
			<div className="header_pointEffect" ref={thirdPoint}></div>
			<div className="header_pointEffect" ref={fourthPoint}></div>
			<div className="header_pointEffect" ref={fifthPoint}></div>
			<div className="header_pointEffect" ref={sixthPoint}></div>
			{/*<div className="header_pointEffect" ref={seventhPoint}></div>*/}
			<div className="header_pointEffect" ref={eighthPoint}></div>
			<div className="header_pointEffect" ref={ninethPoint}></div>
			<div className="header_pointEffect" ref={tenthPoint}></div>
			<div className="header_pointEffect" ref={eleventhPoint}></div>
			{/* <div className="header_pointEffect" ref={twoeleventhPoint}></div> */}

			{/*<div className="header_line" ref={line}></div>*/}
		</header>
	);
};

export default Header;
