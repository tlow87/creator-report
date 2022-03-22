import React from 'react'
import './ChapterTwo.css'
import CreatorQuotes from "../CreatorQuotes/CreatorQuotes"

const ChapterTwo = ({content}) => {
    return(
        <div id="Chapter-2" className="chapter_two-container bg-light-blue pt-100 pb-90">
            <div className="base-grid intro">
                <p className="p2 eyebrow kelly-green">Chapter 2</p>
                <h2 className="kelly-green mt-50">{content[0].headline}</h2>
                <p className="p1 kelly-green mt-30">{content[0].paragraph}</p>
            </div>
        </div>
    )
}

export default ChapterTwo