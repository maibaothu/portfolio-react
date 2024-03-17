import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Body from '../components/Body'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Body heading="PROJECT" text="Some of the computer science projects I contribute" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project