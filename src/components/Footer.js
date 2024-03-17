import "./FooterStyle.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container"> 

            <div className="left">

                <div className="location">
                    <h4>
                    <FaHome size={20} style={{ color: "white", marginRight: "2rem"}}/>
                    San Jose, California
                    </h4>
                </div>

                <div className="phone">
                    <h4> 
                    <FaPhone size={20} style={{ color: "white", marginRight: "2rem"}}/>
                    1-408-627-5772
                    </h4>
                </div>

                <div className="email">
                    <h4> 
                    <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem"}}/>
                    tbmai@ucsd.edu
                    </h4>
                </div>
            </div>    

            <div className="right">

                <h4> Social Media: </h4>
                <div className="social">
                    
                <a href="https://www.linkedin.com/in/thu-mai-237992259/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} style={{ color: "white", marginRight: "2rem"}}/>
                </a>
                <a href="https://www.facebook.com/mai.bao.thu" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} style={{ color: "white", marginRight: "2rem"}}/>
                </a>
                <a href="https://www.instagram.com/maibaothu?igsh=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} style={{ color: "white", marginRight: "2rem"}}/>
                </a>
                <a href="https://github.com/maibaothu" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} style={{ color: "white", marginRight: "2rem"}}/>
                </a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer