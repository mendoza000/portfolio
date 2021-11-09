import React from 'react'
import './Services.css'

const Services = () => {
	
	return(
		<div className="services" id="services">
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
						Trabajo con mis clientes en desarrollar un sitio web que cubra todas sus necesidades y las de su negocio.
					</p>
				</div>

				<div className="services_card">
					<box-icon name='mobile-alt' size="cssSize"></box-icon>
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

			</div>
		</div>
	)

}

export default Services