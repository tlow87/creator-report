import React from 'react'
import './ChapterOne.css'
import { StaticImage } from "gatsby-plugin-image"

const ChapterOne = ({content}) => {
    const intro = content[0].intro[0];
    return(
        <div id="Chapter-1" className="chapter_one-container pt-150">
            <div className="base-grid intro">
                <div className="text-wrapper">
                    <p className="p2 eyebrow kelly-green">Chapter 1</p>
                    <h2 className="kelly-green mt-50">{intro.headline}</h2>
                    <p className="p1 kelly-green mt-30">{intro.paragraph}</p>
                </div>
                <div className="f-dir-col f-justify-between images">
                    <div className="f-dir-row f-justify-center image-wrapper">
                        <StaticImage 
                            src="../../images/chapter-1-intro-1.png" 
                            width="182"
                            layout="CONSTRAINED"
                            placeholder="DOMINANT_COLOR"
                            quality="100"
                            alt="Intro Image 1" 
                            loading="lazy"
                        />
                    </div>
                    <div className="f-dir-row f-justify-end image-wrapper">
                        <StaticImage 
                            src="../../images/chapter-1-intro-2.png" 
                            width="238"
                            layout="CONSTRAINED"
                            placeholder="DOMINANT_COLOR"
                            quality="100"
                            alt="Intro Image 2" 
                            loading="lazy"
                        />
                    </div>
                    <div className="f-dir-row f-justify-start image-wrapper">
                        <StaticImage 
                            src="../../images/chapter-1-intro-3.png" 
                            width="207"
                            layout="CONSTRAINED"
                            placeholder="DOMINANT_COLOR"
                            quality="100"
                            alt="Intro Image 3" 
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ChapterOne