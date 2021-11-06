import React,{useRef, useEffect} from 'react'
import Typed from 'typed.js';
import {animateHeader} from '../helpers/animateHeader'
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
      /*startDelay: 1500*/
    };

    typed.current = new Typed(textSpan.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

  useEffect(() => {
  	animateHeader(header ,firstPoint ,secondPoint ,thirdPoint ,fourthPoint ,fifthPoint ,sixthPoint)
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