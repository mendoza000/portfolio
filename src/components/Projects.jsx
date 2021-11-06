import React from 'react'
import Project from './Project'
import img1 from '../../assets/rain000.jpeg'
import img2 from '../../assets/ppt.jpeg'
import img3 from '../../assets/hotel.png'
import './Projects.css'

const Projects = () => {
	
	return(
		<div className="projects">
			<h3 className="projects_title">
				<box-icon name='rocket' color="#1d915f"></box-icon>
				Proyectos
			</h3>

			<div className="projects_list">
				
				<Project 
					img={img1}
					title='Aplicacion web del clima'
					skill='HTML - CSS - JS - VITE'
				/>

				<Project 
					img={img2}
					title='Juego web'
					skill='HTML - CSS - JS - VITE'
				/>

				<Project 
					img={img3}
					title='Pagina web de hotel'
					skill='HTML - CSS'
				/>

			</div>
		</div>
	)

}

export default Projects