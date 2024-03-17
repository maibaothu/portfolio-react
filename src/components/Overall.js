import "./OverallStyle.css"

import React from 'react'
import IntroPhoto from "../assets/projectBackground.png"
import Profile from "../assets/projectMain.png"

const Overall = () => {
  return (
    <div className="overall">
        <div className="gallery">
            <img className="intro-photo" src={IntroPhoto} alt="IntroPhoto"/>
        </div> 

        <div className="content">
            <p>Welcome, I'm Thu Mai</p>
            <h1>Prospective Software Developer </h1>
        </div>       

        <div className="circle">
            <img className="profile" src={Profile} alt="Profile"/>
        </div>

    </div>
  )
}

export default Overall