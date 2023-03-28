import React from "react";
import { shallow } from "zustand/shallow";
import { langText } from "../../data/langText";
import { useConfigStore } from "../../store/config";
import "../../styles/Footer.css";

const Footer = () => {
	const { lang } = useConfigStore((state) => state, shallow);
	const date = new Date();

	return (
		<footer className="footer">
			<h3 className="footer_title">
				{lang === "es" ? langText.footerTitle.es : langText.footerTitle.en}
			</h3>

			<p className="footer_text">
				{lang === "es" ? langText.footerText.es : langText.footerText.en}
			</p>

			<div className="footer_contacts">
				<a
					target="_blank"
					href="https://twitter.com/mendoza000x"
					className="footer_contact"
				>
					<box-icon type="logo" name="twitter" size="cssSize"></box-icon>
				</a>

				<a
					target="_blank"
					href="https://wa.me/+584163436789"
					className="footer_contact"
				>
					<box-icon type="logo" name="whatsapp" size="cssSize"></box-icon>
				</a>

				<a
					target="_blank"
					href="https://te.me/mendoza000"
					className="footer_contact"
				>
					<box-icon type="logo" name="telegram" size="cssSize"></box-icon>
				</a>
			</div>

			<p className="footer_copy">Created By Omar Mendoza.</p>
		</footer>
	);
};

export default Footer;
