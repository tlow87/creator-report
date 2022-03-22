import React from 'react'
import './ChapterTwo.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CreatorQuotes from "../CreatorQuotes/CreatorQuotes"

const ChapterTwo = ({content}) => {
    return(
        <div id="Chapter-2" className="ch_2-container bg-light-blue pt-100 pb-90">
            <div className="base-grid intro">
                <p className="p2 eyebrow kelly-green">Chapter 2</p>
                <h2 className="kelly-green mt-50">{content[0].headline}</h2>
                <p className="p1 kelly-green mt-30">{content[0].paragraph}</p>
            </div>
            <div className="section_2-container pt-140 pb-120">
                <div className="base-grid">
                    {
                        content[0].section1_tables.table.map((item,index) => {
                            let image = getImage(item.image);
                            return(
                                <div className="table-section" key={`table-${index}`}>
                                    <div className="f-dir-col table-wrapper">
                                        <h4 className="uppercase kelly-green citation">{item.headline}<button className="bg-kelly-green peach">{item.footnote}</button></h4>
                                        <p className="p2 kelly-green pt-5">{item.subhead}</p>
                                        {
                                            item.paragraph &&
                                            <p className="p3 kelly-green pt-20">{item.paragraph}</p>
                                        }
                                        <div className="f-dir-col table mt-30">
                                            {
                                                item.item.map((item,index) => {
                                                    return(
                                                        <div className="f-dir-row f-align-center ptb-30 table-item" key={`table-item-${index}`}>
                                                            <h3 className="kelly-green">{item.statistic}<span>%</span></h3>
                                                            <p className="p2 kelly-green" dangerouslySetInnerHTML={{ __html: item.description }}/>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="f-dir-col f-justify-center image-wrapper">
                                        <GatsbyImage image={image} alt="" objectFit="contain" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ChapterTwo