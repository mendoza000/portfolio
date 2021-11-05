import React,{useRef, useEffect} from 'react'
import Typed from 'typed.js';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import './Header.css'

const Header = () => {

	const textSpan = useRef()
	const typed = useRef()
	const header = useRef()
	const firstPoint = useRef()
	const secondPoint = useRef()
	const thirdPoint = useRef()
	const fourthPoint = useRef()
	const fifthPoint = useRef()

	const animateHeader = () => {

		gsap.from(header.current, {
    	opacity: 0
    })

    gsap.to(header.current, {
    	opacity: 1,
    	duration: 1.5
    })

    gsap.from(firstPoint.current, {
    	y: -window.innerHeight,
    	rotate: 0
    })
    gsap.to(firstPoint.current, {
    	duration: 8,
    	y: window.innerHeight + 50,
    	repeat:-1,
    	ease: 'linear',
    	rotate: 360,
    })

    gsap.from(secondPoint.current, {
    	y: -window.innerHeight,
    	rotate: 0,
    	x: 50
    })
    gsap.to(secondPoint.current, {
    	duration: 7,
    	y: window.innerHeight + 50,
    	repeat:-1,
    	ease: 'linear',
    	rotate: 360,
    	x: 50,
    	yoyo: true
    })

    gsap.from(thirdPoint.current, {
    	y: -window.innerHeight,
    	rotate: 0,
    	x: -200
    })
    gsap.to(thirdPoint.current, {
    	duration: 9,
    	y: window.innerHeight,
    	repeat:-1,
    	ease: 'linear',
    	rotate: 360,
    	x: 200,
    	yoyo: true
    })

    gsap.from(fourthPoint.current, {
    	y: window.innerHeight,
    	rotate: 0,
    	x: -150
    })
    gsap.to(fourthPoint.current, {
    	duration: 7,
    	y: -window.innerHeight,
    	repeat:-1,
    	ease: 'linear',
    	rotate: 360,
    	x: 200,
    	yoyo: true
    })

    gsap.from(fifthPoint.current, {
    	y: -200,
    	rotate: 0,
    	x: -window.innerWidth
    })
    gsap.to(fifthPoint.current, {
    	duration: 8,
    	y: 100,
    	repeat:-1,
    	ease: 'linear',
    	rotate: 360,
    	x: 200,
    	yoyo: true,
    })
	}

	useEffect(() => {
    const options = {
    	strings: [
        'Soy desarrollador web!',
        'Soy autodidacta!',
        'Soy amante de la tecnologia!'
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 4000,
      loop: true,
      startDelay: 500
    };

    typed.current = new Typed(textSpan.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  useEffect(() => {
  	animateHeader()
  }, [])

	return(
		<header className="header" ref={header}>
			<h1 className="header_title">Omar Mendoza</h1>
			<p className="header_autoTyped">
				>
				<span ref={textSpan}>
				</span>
			</p>

			<div className="header_circleFlur"></div>
			<div className="header_circleFlur-last"></div>

			<div className="header_pointEffect" ref={firstPoint}></div>
			<div className="header_pointEffect" ref={secondPoint}></div>
			<div className="header_pointEffect" ref={thirdPoint}></div>
			<div className="header_pointEffect" ref={fourthPoint}></div>
			<div className="header_pointEffect" ref={fifthPoint}></div>
		</header>
	)

}

export default Header