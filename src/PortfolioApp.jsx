import React from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
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
		</>
	)

}

export default PortfolioApp