import React from 'react'
import '../../styles/Nav.css'

const Nav = () => {
	
	return(
		<nav className="nav">
			<ul className="nav_list">
				<li className="nav_item">
					<a href="#">
						<box-icon name='home' size="cssSize"></box-icon>
						<span>Inicio</span>
					</a>
				</li>
				<li className="nav_item">
					<a href="#about">
						<box-icon name='user' size="cssSize"></box-icon>
						<span>Sobre mi</span>
					</a>
				</li>
				<li className="nav_item">
					<a href="#services">
						<box-icon name='bookmark' size="cssSize"></box-icon>
						<span>Servicios</span>
					</a>
				</li>
				<li className="nav_item">
					<a href="#projects">
						<box-icon name='book' size="cssSize"></box-icon>
						<span>Proyectos</span>
					</a>
				</li>
			</ul>
		</nav>
	)

}

export default Nav