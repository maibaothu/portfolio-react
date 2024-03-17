import React from 'react'

import DigitalArt from "../assets/DigitalArt.jpeg"
import DigitalArt2 from "../assets/DigitalArt2.jpg"
import "./AboutContentStyle.css"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h2> Tell you about myself...</h2>
            <p>
            As a recent graduate student in Computer Science from UC San Diego, I bring a fresh perspective and a hunger for knowledge to every endeavor. My academic journey has equipped me with a strong foundation in various areas of computer science, from programming and algorithms to machine learning and artificial intelligence. Beyond the classroom, I am deeply passionate about exploring creative outlets and indulging in diverse interests. From listening to music and immersing myself in movies to being an avid follower of K-pop and video games, I find joy in embracing different forms of art and entertainment. Moreover, my love for cats and penchant for digital drawing using Procreate reflect my appreciation for both the whimsical and the technical aspects of life. What truly defines me, however, is my unwavering commitment to continuous growth and learning. I thrive on seeking out new challenges, expanding my horizons, and evolving as both a professional and an individual.
            </p>
        </div>

        <div className="right">
            <div className='image-container'>

                <div className='image-top'>
                    <img src={DigitalArt} className='img' alt='true' />
                </div>

                <div className='image-bottom'>
                    <img src={DigitalArt2} className='img' alt='true' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutContent
