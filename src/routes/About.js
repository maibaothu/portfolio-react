import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Body from '../components/Body'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <Body heading = "ABOUT ME" text = "" />
      <AboutContent/>
      <Footer /> 
    </div>
  )
}

export default About