import React from 'react';
import "./BodyStyle.css";

const Body = ({ heading, text }) => {
    return (
        <div className="body">
            <div className="body-head">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Body;
