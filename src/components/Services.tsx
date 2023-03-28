import React from "react";
import { shallow } from "zustand/shallow";
import { langText } from "../data/langText";
import { useConfigStore } from "../store/config";
import "../styles/Services.css";

const Services = () => {
	const { lang } = useConfigStore((state) => state, shallow);

	return (
		<div className="services mx" id="services">
			<h3 className="services_title">
				<box-icon name="crown" color="#1d915f"></box-icon>
				{lang === "es" ? langText.servicesTitle.es : langText.servicesTitle.en}
			</h3>

			<div className="services_list">
				<div className="services_card">
					<box-icon name="code-alt" size="cssSize"></box-icon>
					<p className="services_card_title">
						{lang === "es"
							? langText.servicesTitles.es[0]
							: langText.servicesTitles.en[0]}
					</p>
					<p className="services_card_text">
						{lang === "es"
							? langText.servicesTexts.es[0]
							: langText.servicesTexts.en[0]}
					</p>
				</div>

				<div className="services_card">
					<box-icon name="trim" size="cssSize"></box-icon>
					<p className="services_card_title">
						{lang === "es"
							? langText.servicesTitles.es[1]
							: langText.servicesTitles.en[1]}
					</p>
					<p className="services_card_text">
						{lang === "es"
							? langText.servicesTexts.es[1]
							: langText.servicesTexts.en[1]}
					</p>
				</div>

				<div className="services_card">
					<box-icon name="palette" size="cssSize"></box-icon>
					<p className="services_card_title">
						{lang === "es"
							? langText.servicesTitles.es[2]
							: langText.servicesTitles.en[2]}
					</p>
					<p className="services_card_text">
						{lang === "es"
							? langText.servicesTexts.es[2]
							: langText.servicesTexts.en[2]}
					</p>
				</div>

				<div className="services_card">
					<box-icon name="mobile-alt" size="cssSize"></box-icon>
					<p className="services_card_title">
						{lang === "es"
							? langText.servicesTitles.es[3]
							: langText.servicesTitles.en[3]}
					</p>
					<p className="services_card_text">
						{lang === "es"
							? langText.servicesTexts.es[3]
							: langText.servicesTexts.en[3]}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
