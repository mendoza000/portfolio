import React, {useRef, useEffect} from 'react'
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

const Project = ({img, title, text, skill, urlWeb, urlRepo}) => {
	
	const hover = useRef()
	const titleP = useRef()
	const line = useRef()
	const skillP = useRef()
	const btn1 = useRef()
	const btn2 = useRef()

	useEffect(() => {

		gsap.to(hover.current, {
			opacity: 0
		})
		gsap.to(titleP.current, {
			y: -50,
		})
		gsap.to(line.current, {
			y: -50,
		})
		gsap.to(skillP.current, {
			y: 50,
		})
		gsap.to(btn1.current, {
			x: -150,
		})
		gsap.to(btn2.current, {
			x: 150,
		})


	},[])

	const viewHover = () => {

		gsap.to(hover.current, {
			opacity: 1,
			duration: 0.5
		})
		gsap.to(titleP.current, {
			y: 0,
			duration: 0.7
		})
		gsap.to(line.current, {
			y: 0,
			duration: 0.6
		})
		gsap.to(skillP.current, {
			y: 0,
			duration: 0.7
		})
		gsap.to(btn1.current, {
			x: 0,
			duration: 0.7
		})
		gsap.to(btn2.current, {
			x: 0,
			duration: 0.7
		})

	}
	const noViewHover = () => {

		gsap.to(hover.current, {
			opacity: 0,
			duration: 0.5
		})
		gsap.to(titleP.current, {
			y: -50,
			duration: 0.7
		})
		gsap.to(line.current, {
			y: -50,
			duration: 0.6
		})
		gsap.to(skillP.current, {
			y: 50,
			duration: 0.7
		})
		gsap.to(btn1.current, {
			x: -150,
			duration: 0.7
		})
		gsap.to(btn2.current, {
			x: 150,
			duration: 0.7
		})

	}

	return(
		<div className="projects_card">
			<img src={img} alt="img project"/>
			
			<div 
				className="hover" 
				ref={hover} 
				onMouseEnter={viewHover}
				onMouseLeave={noViewHover}>
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
						target='_blank'
						ref={btn1}>
						<box-icon name='rocket'></box-icon>
						Ver pagina
					</a>
					<a 
						className="project_card_btn"
						href={urlRepo}
						target='_blank' 
						ref={btn2}>
						<box-icon name='planet'></box-icon>
						Ver Github
					</a>
				</div>
			</div>

		</div>
	)

}

export default Project