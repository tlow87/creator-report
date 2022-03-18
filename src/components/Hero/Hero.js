import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import './Hero.css'


const Hero = ({content}) => {
    console.log(content);
    return(
        <div className="hero-container">
            <div className="plr-20">
                <div className="f-dir-row f-justify-between pt-30 pb-20">
                    <p className="p2">Linktree presents</p>
                    <p className="p2">The 2022</p>
                    <a href="#ToC" className="p2 neon-green">Scroll to discover  ↓</a>
                </div>
                <h1 className="neon-green uppercase align-center">{content[0].headline}</h1>
                <div className="named-layout">
                    <div className="image-wrapper">
                        <StaticImage 
                            src="../../images/hero-image.png" 
                            layout="FULL_WIDTH"
                            placeholder="DOMINANT_COLOR"
                            // formats="[AUTO,WEBP]"
                            quality="100"
                            alt="Hero Image" 
                        />
                    </div>
                    <h4 className="sky-blue">{content[0].subhead}</h4>
                    <p className="p2 white">{content[0].paragraph}</p>
                </div>
            </div>
        </div>
    )
}



export default Hero