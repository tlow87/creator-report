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
            <div className="section_2-container pt-140 pb-120">
                <div className="base-grid">
                    {
                        content[0].section1_tables.table.map((item,index) => {
                            console.log(item);
                            return(
                                <div className="table-section" key={`table-${index}`}>
                                    <div className="table-wrapper">
                                        <h4 className="uppercase kelly-green">{item.headline}</h4>
                                        <p className="p2 kelly-green">{item.subhead}</p>
                                        {
                                            item.paragraph &&
                                            <p className="p3 kelly-green">{item.paragraph}</p>
                                        }
                                        <div className="table">
                                            {
                                                item.item.map((item,index) => {
                                                    return(
                                                        <div className="table-item" key={`table-item-${index}`}>
                                                            <h4 className="kelly-green">{item.statistic}<span>%</span></h4>
                                                            <p className="p2 kelly-green" dangerouslySetInnerHTML={{ __html: item.description }}/>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
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