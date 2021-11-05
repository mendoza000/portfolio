import React,{useRef, useEffect} from 'react'
import Typed from 'typed.js';
import './Header.css'

const Header = () => {

	const textSpan = useRef()
	const typed = useRef()

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
      loop: true
    };

    typed.current = new Typed(textSpan.current, options);
    
    return () => {
      typed.current.destroy();
    }
  }, [])

	return(
		<header className="header">
			<h1 className="header_title">Omar Mendoza</h1>
			<p className="header_autoTyped">
				>
				<span ref={textSpan}>
				</span>
			</p>

			{/*<span className="header_labelContact">
				¿Te gusta mi trabajo?
			</span>*/}
		{/*	<button className="header_btnContact">
				Hablemos!
			</button>*/}

			<div className="header_circleFlur"></div>
			<div className="header_circleFlur-last"></div>
		</header>
	)

}

export default Header