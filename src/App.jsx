import React from 'react'
import About1 from './components/about1/About1'

import Contact from './components/contacts/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'

const app = () => {
  return (
    <>

    <Header />
    <Nav /> 
    <About1 />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />

    </>
  )
}

export default app