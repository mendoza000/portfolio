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
						Puedo desarrollar un sitio web que cubra sus necesidades y se adapte a usted y su negocio.
					</p>
				</div>

				<div className="services_card">
					<box-icon name='mobile-alt' size="cssSize"></box-icon>
					<p className="services_card_title">
						Diseño responsive
					</p>
					<p className="services_card_text">
						Las paginas web no se ven siempre desde una pantalla igual, a veces desde un telefono, tablet o laptop. Yo puedo hacer que se vea bien en todos lados.
					</p>
				</div>

				<div className="services_card">
					<box-icon name='palette' size="cssSize"></box-icon>
					<p className="services_card_title">
						Adaptibilidad de diseño
					</p>
					<p className="services_card_text">
						Tambien puedo trabajar con algun diseño que usted ya tenga, o bien, crear uno desde cero con algunon patrones o colores que le llamen la atención.
					</p>
				</div>

			</div>
		</div>
	)

}

export default Services