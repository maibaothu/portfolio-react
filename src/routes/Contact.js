import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Body from '../components/Body'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Body heading="CONTACT" text="Fill the form to leave me a message" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact