import React from 'react'
import '../styles/Services.css'

const Services = () => {
	
	return(
		<div className="services mx" id="services">
			<h3 className="services_title">
				<box-icon name='crown' color="#1d915f"></box-icon>
				Servicios
			</h3>

			<div className="services_list">
				
				<div className="services_card">
					<box-icon name='code-alt' size="cssSize"></box-icon>
					<p className="services_card_title">
						Desarrollo Web
					</p>
					<p className="services_card_text">
						Trabajo con mis clientes en desarrollar un sitio web que cubra todas sus necesidades y las de su negocio, porque sabemos que el futuro esta en la web y en su portabilidad.
					</p>
				</div>

				<div className="services_card">
					<box-icon name='trim' size="cssSize"></box-icon>
					<p className="services_card_title">
						Diseño responsive
					</p>
					<p className="services_card_text">
						Las paginas web, no se visualizan de la misma forma en un dispositivo móvil que desde una computadora. Sin embargo puedo hacer que su sitio web se ve bien en todos lados.
					</p>
				</div>

				<div className="services_card">
					<box-icon name='palette' size="cssSize"></box-icon>
					<p className="services_card_title">
						Adaptabilidad de diseño
					</p>
					<p className="services_card_text">
						Me especializo en crear diseños desde cero, y tambien puedo trabajar en diseños que mis clientes ya posean, que nos permita tener una colaboración de gran valor en el resultado final.
					</p>
				</div>

				<div className="services_card">
					<box-icon name='mobile-alt' size="cssSize"></box-icon>
					<p className="services_card_title">
						Mobile First
					</p>
					<p className="services_card_text">
						Esta es una estrategia de diseño de interfaces donde se empieza con el desarrollo para pantallas pequeñas, porque sabemos que usamos mas un SmartPhone que una laptop y tener la mejor experiencia ahí es mi misión.
					</p>
				</div>

			</div>
		</div>
	)

}

export default Services