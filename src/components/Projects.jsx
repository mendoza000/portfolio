import React from 'react'
import Project from './Project'
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
					img={'../../assets/rain000.jpeg'}
					title='Aplicacion web del clima'
					skill='HTML - CSS - JS - VITE'
				/>

				<Project 
					img={'../../assets/ppt.jpeg'}
					title='Juego web'
					skill='HTML - CSS - JS - VITE'
				/>

				<Project 
					img={'../../assets/hotel.png'}
					title='Pagina web de hotel'
					skill='HTML - CSS'
				/>

			</div>
		</div>
	)

}

export default Projects