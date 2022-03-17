import React from 'react'
import './Hero.css'

const Hero = ({content}) => {
    console.log(content);
    return(
        <div className="hero-container">
            <h1>{content[0].headline}</h1>
        </div>
    )
}



export default Hero