import "./MiniprojectStyle.css"
import Miniproject from "./Miniproject"
import Workdata from "./Workdata"

import React from 'react'

const Work = () => {
  return (
    <div className="miniproject-container">
        <h1 className="project-heading"> </h1>
        <div className="project-container">
            {Workdata.map((val, ind) => {
                return (
                    <Miniproject 
                        key = {ind}
                        imgsrc = {val.imgsrc}
                        title = {val.title}
                        text = {val.text}
                        view = {val.view}
                        source = {val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work