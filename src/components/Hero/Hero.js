import React from 'react'
import './Hero.css'

const Hero = ({content}) => {
    console.log(content);
    return(
        <div className="hero-container">
            <div className="plr-20">
                <h1 className="neon-green uppercase align-center">{content[0].headline}</h1>
            </div>
        </div>
    )
}



export default Hero