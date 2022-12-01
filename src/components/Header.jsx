import React, { useRef, useEffect, useState } from "react";
import Typed from "typed.js";
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { animateHeader } from "../helpers/animateHeader";
import { darkMode, ligthMode } from "../helpers/setTheme";
import "../styles/Header.css";

const Header = () => {
  const [icon, setIcon] = useState("sun");

  const textSpan = useRef();
  const typed = useRef();
  const header = useRef();
  const firstPoint = useRef();
  const secondPoint = useRef();
  const thirdPoint = useRef();
  const fourthPoint = useRef();
  const fifthPoint = useRef();
  const sixthPoint = useRef();
  const seventhPoint = useRef("");
  const eighthPoint = useRef();
  const ninethPoint = useRef();
  const tenthPoint = useRef();
  const eleventhPoint = useRef();
  const twoeleventhPoint = useRef();
  const switchCircle = useRef();
  let dark = false;

  useEffect(() => {
    const options = {
      strings: [
        "Desarrollador web!",
        "Desarrollador Frontend!",
        "Desarrollador Backend!",
        "Autodidacta!",
        "Amante de la tecnologia!",
      ],
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
  }, []);

  useEffect(() => {
    animateHeader(
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
      twoeleventhPoint
    );
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

  return (
    <header className="header" ref={header}>
      <h1 className="header_title">Omar Mendoza</h1>
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
      <div className="header_pointEffect" ref={twoeleventhPoint}></div>

      {/*<div className="header_line" ref={line}></div>*/}
    </header>
  );
};

export default Header;
