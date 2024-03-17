import "./MiniprojectStyle.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const Miniproject = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="image" />
            <h2 className="project-title"> {props.title} </h2>
                
            <div className="project-detail">

                <p> {props.text} </p>
                <div className="project-button">
                    <NavLink to={props.view} className="btn"> View </NavLink>
                    <NavLink to={props.source} className="btn"> Source </NavLink>
                </div>
            </div>

    </div>
  )
}

export default Miniproject