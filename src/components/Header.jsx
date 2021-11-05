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
	const sixthPoint = useRef()

	const animateHeader = () => {

		gsap.from(header.current, {
    	opacity: 0
    })

    gsap.to(header.current, {
    	opacity: 1,
    	duration: 1.5
    })

    gsap.from(firstPoint.current, {
    	opacity: 0,
    	delay: 2,
    })
    gsap.to(firstPoint.current, {
    	delay: 2.5,
    	x: 100,
    	y: 100,
    	duration: 2
    })
    gsap.to(firstPoint.current, {
    	rotate: 160,
    	duration: 2,
    	delay: 2.5,
    	repeat: -1,
    	ease: 'linear'
    })
    
    gsap.from(secondPoint.current, {
    	opacity: 0,
    	delay: 2,
    })
    gsap.to(secondPoint.current, {
    	delay: 2.5,
    	x: -100,
    	y: 163,
    	duration: 2
    })
    gsap.to(secondPoint.current, {
    	rotate: 160,
    	duration: 2,
    	delay: 2.5,
    	repeat: -1,
    	ease: 'linear'
    })

    gsap.from(thirdPoint.current, {
    	opacity: 0,
    	delay: 2,
    })
    gsap.to(thirdPoint.current, {
    	delay: 2.5,
    	x: -110,
    	y: -180,
    	duration: 2
    })
    gsap.to(thirdPoint.current, {
    	rotate: 160,
    	duration: 2,
    	delay: 2.5,
    	repeat: -1,
    	ease: 'linear'
    })

    gsap.from(fourthPoint.current, {
    	opacity: 0,
    	delay: 2,
    })
    gsap.to(fourthPoint.current, {
    	delay: 2.5,
    	x: 70,
    	y: -100,
    	duration: 2
    })
    gsap.to(fourthPoint.current, {
    	rotate: 160,
    	duration: 2,
    	delay: 2.5,
    	repeat: -1,
    	ease: 'linear'
    })

    gsap.from(fifthPoint.current, {
    	opacity: 0,
    	delay: 2,
    })
    gsap.to(fifthPoint.current, {
    	delay: 2.5,
    	x: 120,
    	y: -230,
    	duration: 2
    })
    gsap.to(fifthPoint.current, {
    	rotate: 160,
    	duration: 2,
    	delay: 2.5,
    	repeat: -1,
    	ease: 'linear'
    })

    gsap.from(sixthPoint.current, {
    	opacity: 0,
    	delay: 2,
    })
    gsap.to(sixthPoint.current, {
    	delay: 2.5,
    	x: 40,
    	y: 220,
    	duration: 2
    })
    gsap.to(sixthPoint.current, {
    	rotate: 160,
    	duration: 2,
    	delay: 2.5,
    	repeat: -1,
    	ease: 'linear'
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
			<div className="header_pointEffect" ref={sixthPoint}></div>
		</header>
	)

}

export default Header