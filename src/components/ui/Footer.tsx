import React from 'react'
import '../../styles/Footer.css'

const Footer = () => {
	const date = new Date
	
	return(
		<footer className="footer">
			<h3 className="footer_title">
				¿Te gusta mi trabajo?
			</h3>

		<p className="footer_text">
			Si estas interesado en mis servicios como desarrollador web, puedes contactarme, y me puedo adaptar a tus necesidades y a las de tu negocio.
		</p>

		<div className="footer_contacts">
			<a target="_blank" href="https://twitter.com/mendoza000x" className="footer_contact">
				<box-icon type='logo' name='twitter' size="cssSize"></box-icon>
			</a>

			<a target="_blank" href="https://wa.me/+584164793843" className="footer_contact">
				<box-icon type='logo' name='whatsapp' size="cssSize"></box-icon>
			</a>

			<a target="_blank" href="https://te.me/mendoza000" className="footer_contact">
				<box-icon type='logo' name='telegram' size="cssSize"></box-icon>
			</a>
		</div>

		<p className="footer_copy">
			Created By Omar Mendoza.
		</p>
		</footer>
	)

}

export default Footer