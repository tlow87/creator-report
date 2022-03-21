import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './CreatorQuotes.css'

const CreatorQuotes = (props) => {
    console.log(props.quotes);
    return(
        <div className={`creator_quotes-container ${props.color}`}>
            <div className="base-grid">
                <h4 className="kelly-green align-center">Words from our creators</h4>
                {
                    props.quotes.map((item, index) => {
                        return(
                            <div className="quote-wrapper" key={`quote-${index}`}>
                                <div className="quote">
                                    <p dangerouslySetInnerHTML={{ __html: item.quote }}/>
                                    <a href={`linktr.ee${item.link}`}>linktr.ee<span>{item.link}</span></a>
                                </div>
                                <div className="quote-author">
                                    <div className="avatar-wrapper">
                                        
                                    </div>
                                </div>
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>
    )
}

export default CreatorQuotes