import React from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Nav from './components/Nav'

const PortfolioApp = () => {
	
	return(
		<>
			<Nav />
			<Header />
			<AboutMe />
			<Services />
			<Skills />
			<Projects />
			<Footer />
		</>
	)

}

export default PortfolioApp