import React from 'react'
import './ChapterTwo.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CreatorQuotes from "../CreatorQuotes/CreatorQuotes"

const ChapterTwo = ({content}) => {
    console.log(content);
    return(
        <div id="Chapter-2" className="ch_2-container bg-light-blue pt-100 pb-90">
            <div className="base-grid intro">
                <p className="p2 eyebrow kelly-green">Chapter 2</p>
                <h2 className="kelly-green mt-50">{content[0].headline}</h2>
                <p className="p1 kelly-green mt-30">{content[0].paragraph}</p>
            </div>
            <div className="section_1-container pt-140 pb-120">
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
            <div className="section_2-container mlr-20">
                <div className="chart-container bg-kelly-green ptb-80">
                    <div className="base-grid">
                        <div className="f-dir-col">
                            <h4 className="peach citation">{content[0].section2_chart[0].headline}<button className="bg-peach kelly-green">4</button></h4>
                            <p className="p2 peach mt-20">{content[0].section2_chart[0].subhead}</p>
                            <div className="chart-legend mt-50">
                                <p className="p2 peach mb-20">Annual Income</p>
                                {
                                    content[0].section2_chart[0].legend.map((item, index) => {
                                        return(
                                            <p className="p3 peach" key={`legend-item-${index}`}>
                                                <svg className={`fill-${item.color}`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px">
                                                    <circle cx="8" cy="8" r="8"/>
                                                </svg>
                                                {item.value}
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChapterTwo