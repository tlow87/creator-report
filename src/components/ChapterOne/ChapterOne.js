import React from 'react'
import './ChapterOne.css'

const ChapterOne = ({content}) => {
    const intro = content[0].intro[0];
    return(
        <div id="Chapter-1" className="chapter_one-container pt-150">
            <div className="base-grid">
                <div className="text-wrapper">
                    <p className="p2 eyebrow kelly-green">Chapter 1</p>
                    <h2 className="kelly-green mt-50">{intro.headline}</h2>
                    <p className="p1 kelly-green mt-30">{intro.paragraph}</p>
                </div>
                <div className="images">
                    <div className="image-wrapper">
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ChapterOne