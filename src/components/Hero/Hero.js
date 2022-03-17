import React from 'react'

const Hero = ({content}) => {
    console.log(content);
    return(
        <div className="hero-wrapper">
            <h1>{content[0].headline}</h1>
        </div>
    )
}



export default Hero