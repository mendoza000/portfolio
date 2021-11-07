import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
	
	return(
		<div className="about" id="about">
			<div className="about_col">
				<h3 className="about_title">
					¿Quien soy yo?
				</h3>

				<p className="about_text">Hola ✌, yo soy Omar Mendoza, me considero un joven que puede adaptarse a los cambios y abierto a nuevos conocimientos y retos siempre para ser mejor cada dia! Actualemente estoy desarrollando mis habilidades de forma autodidacta.</p>
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