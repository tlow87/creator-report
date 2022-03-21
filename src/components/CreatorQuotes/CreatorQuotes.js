import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './CreatorQuotes.css'

const CreatorQuotes = (props) => {
    return(
        <div className={`creator_quotes-container theme-${props.color} pt-${props.paddingTop} pb-${props.paddingBottom}`}>
            <div className="base-grid">
                <h4 className="kelly-green align-center">Words from our creators</h4>
                {
                    props.quotes.map((item, index) => {
                        let image = getImage(item.avatar);
                        console.log(image);
                        return(
                            <div className="quote-wrapper" key={`quote-${index}`}>
                                <div className="f-dir-col f-justify-center quote">
                                    <p dangerouslySetInnerHTML={{ __html: item.quote }}/>
                                    <a href={`linktr.ee/${item.link}`}>linktr.ee/<span>{item.link}</span></a>
                                </div>
                                <div className="f-dir-col f-align-center f-justify-center quote-author">
                                    <div className="avatar-wrapper">
                                        <GatsbyImage image={image} alt={item.creator} objectFit="contain" />
                                    </div>
                                    <p className="p2 kelly-green">{item.creator}</p>
                                    <p className="p3 kelly-green">{item.followers}</p>
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