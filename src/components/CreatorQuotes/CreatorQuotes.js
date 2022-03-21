import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './CreatorQuotes.css'

const CreatorQuotes = (props) => {
    return(
        <div className={`creator_quotes-container ${props.color}`}>
            <div className="base-grid">
                <h4 className="kelly-green align-center">Words from our creators</h4>
                <div className="quote-wrapper">

                </div>
            </div>
        </div>
    )
}

export default CreatorQuotes