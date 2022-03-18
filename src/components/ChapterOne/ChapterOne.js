import React from 'react'
import './ChapterOne.css'

const ChapterOne = ({content}) => {
    const intro = content[0].intro[0];
    return(
        <div id="Chapter-1" className="chapter_one-container pt-150">
            <div className="base-grid">

            </div>
            <h1>{intro.headline}</h1>
        </div>
        
    )
}

export default ChapterOne