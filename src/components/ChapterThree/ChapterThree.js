import React from 'react'
import './ChapterThree.css'
import Tip from './Tip'

const ChapterThree = ({content}) => {
    return(
        <div id="Chapter-3" className="ch_3-container bg-white pt-100 pb-90">
            <div className="base-grid">
                <div className="intro-container pb-140">
                    <p className="p2 eyebrow kelly-green">Chapter 3</p>
                    <h2 className="kelly-green mt-50">{content[0].headline}</h2>
                    <p className="p1 kelly-green mt-30">{content[0].paragraph}</p>
                </div>
                <Tip
                    index='1'
                    headline={content[0].tipOne[0].headline}
                    paragraph={content[0].tipOne[0].paragraph}
                />
            </div>
        </div>
    )
}

export default ChapterThree