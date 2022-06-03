import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
	
	return(
		<div className="about mx" id="about">
			<div className="about_col">
				<h3 className="about_title">
					¿Quién soy yo?
				</h3>

				<p className="about_text">Hola ✌. Me llamo Omar Mendoza, y soy un joven muy apasionado por la tecnología, principalmente en el desarrollo de aplicaciones y servicios web. Me puedo adaptar a los cambios que se presenten, y al mismo tiempo estoy muy abierto al aprendizaje continuo, acepto grandes retos y desafios que me permitan mejorar cada día. Actualmente estoy desarrollando mis habilidades de forma autodidacta.</p>
			</div>

			<div className="about_col">
				<p>
					<box-icon name='pin' color="#1d915f"></box-icon>
					Disponibilidad para Freelancer
				</p>
				<p>
					<box-icon name='pin' color="#1d915f"></box-icon>
					Ubicado en Venezuela
				</p>
				<div className="about_col_redes">
					<a href="https://twitter.com/mendoza000x" target="_blank">
						<box-icon type='logo' name='twitter' color="#1d915f" size="cssSize"></box-icon>
					</a>
					<a href="https://github.com/mendoza000" target="_blank">
						<box-icon type='logo' name='github' color="#1d915f" size="cssSize"></box-icon>
					</a>
					<a href="https://wa.me/+584164793843" target="_blank">
						<box-icon type='logo' name='whatsapp' color="#1d915f" size="cssSize"></box-icon>
					</a>
					<a href="https://t.me/mendoza000" target="_blank">
						<box-icon type='logo' name='telegram' color="#1d915f" size="cssSize"></box-icon>
					</a>
				</div>
			</div>

		</div>
	)

}

export default AboutMe