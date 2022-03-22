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
                        <div className="chart-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 786 698"><path d="M728.9,346c0,2.6,0,5.2-.4,7.7-2.4,24.8-15.9,47.8-25.5,70.5-2.5,5.8-4.7,11.5-6.4,17.3-3.6,12.1-5.6,25-7.8,37.7-.3,2-.7,4.1-1,6.1-3.4,19.2-7.6,37.9-18.9,52.9-15.6,20.8-42.5,31.5-67.8,44.4-6.6,3.3-13.1,6.8-19.2,10.7-18.7,11.8-35.8,29.6-56.4,42.6-9.2,5.8-19,10.6-30,13.4-19.5,5.1-41.4,1.7-64.3-1.2-4.4-.5-8.8-1.1-13.3-1.5-2.7-.3-5.4-.5-8-.7-2.3-.2-4.7-.3-7-.4l1.6-185.7c-.3-.8-.3-1.6,0-2.4l.4-41.9c.5-.1,1.1-.3,1.6-.4l-1-67.4,30.9-46.7,83.9-127c-.2-.3-.5-.5-.7-.8,1.4-2.9,2.8-5.9,4.2-8.8,.5,.8,.9,1.5,1.5,2.2l41.8-63.2c3.8,2.9,7.7,5.5,11.7,7.9,5.9,3.6,12.2,6.8,18.7,9.8,0-1.3,.2-2.6,.3-4,1.2,1.1,2.4,2.2,3.7,3.2l4.4,3.5c0,.3,0,.7,0,1,22.3,10.1,45.1,19.3,59.4,36.8,10.8,13.3,15.8,29.8,19.6,47.1,.7,3,1.3,6,1.9,9.1,2.3,11.2,4.5,22.4,7.8,33.1,.4,1.1,.7,2.3,1.1,3.4,.6,1.7,1.2,3.5,1.9,5.2,4,10.3,9.4,20.5,14.6,30.9,1.5,2.9,2.9,5.9,4.3,8.8,6.9,14.5,12.5,29.4,12.8,45.3-.3,.6-.3,1-.3,1.5h0Z" fill="#fff"/><path d="M728.9,346c0,2.6,0,5.2-.4,7.7-21.8,1.7-41.2-.1-57.2-4.6-27.3-7.7-45.9-23.8-49.2-45.6-1.9-12.4,7-23.1,18.5-31.1-.3-.7-.6-1.5-.9-2.3-2.4-7-2.1-14.9,1.3-22.9,5.5-13.2,19.3-26.6,43.3-38.3,.7,3,1.3,6,1.9,9.1-21.5,10.9-32.7,22.6-36.9,32.7-2.6,6.2-2.7,11.8-1.1,16.6,0,.1,0,.2,0,.3,10.6-6,23.4-10.9,36.3-14.3,3.1-.8,6.3-1.6,9.4-2.2,.4,1.1,.7,2.3,1.1,3.4,.6,1.7,1.2,3.5,1.9,5.2-3.4,.7-6.8,1.4-10.2,2.3-12.2,3.2-24.1,7.8-33.8,13.3,1.5,1.6,3.2,3,5.1,4.2,5,3.2,13.5,6.2,23.8,8.3,9.4,1.9,19.9,3,29.7,2.8,1.5,2.9,2.9,5.9,4.3,8.8-.5,0-1,.1-1.6,.1-11.4,.5-23.5-.7-34.3-2.9-10.7-2.2-20.5-5.5-26.8-9.5-3-2-5.8-4.3-8-6.9-10.6,7.6-15.4,15.3-14.3,22.1,2.5,16.9,17.2,31,42.7,38.2,15.1,4.3,33.7,5.9,55.1,4.2,.2,.4,.2,.8,.2,1.3h0Z" fill="#2c1798"/><path d="M605.5,124c0,.3,0,.7,0,1-.6,4.3-1.5,8.6-2.8,12.7-3.9,12.6-10.9,23.9-20.5,32.8-10.7,9.9-25.3,16.9-40.2,14.8-3.4-.5-6.7-1.3-9.8-2.7-3.2-1.3-6.2-3.1-8.8-5.4-1.1-1-2.2-2-3.1-3.2-.2-.3-.5-.5-.7-.8,1.4-2.9,2.8-5.9,4.2-8.8,.5,.8,.9,1.5,1.5,2.2,.7,.9,1.4,1.8,2.2,2.6,2.5,2.5,5.5,4.5,8.8,5.7,1.8,.7,3.6,1.2,5.4,1.6,5.9,1,12,.5,17.6-1.7,6.3-2.4,12-5.9,17-10.5,12.2-11,19.7-26.9,21.2-43.2,0-1.3,.2-2.6,.3-4,1.2,1.1,2.4,2.2,3.7,3.2l4.1,3.7Z" fill="#2c1798"/><path d="M517.2,274s0,.1,0,0q0,.1,0,0Zm0,0s0,.1,0,0q0,.1,0,0Zm62.8,11.3c-4.9-4.6-11.9-6.8-18.5-6.8-13.8,.1-26.2,9.7-35.9,18.6-9.5,8.8-17.5,19-23.7,30.3-2,3.6-3.8,7.3-5.5,11.1l-.4-.9-.2-.5c-.3-.7-.6-1.4-.9-2.1-1.1-2.8-1.9-5.6-2.6-8.6-.2-1.1-.4-2.1-.6-3.2-.2-1.6-.4-3.2-.4-4.8s-.1-1.9-.1-2.8c3.9-2,7.7-4.2,11.3-6.8,5.3-3.7,10.3-8,14.8-12.7,5-5.2,10.3-11.7,9.5-19.4-.2-3.5-1.8-6.8-4.2-9.3-1.4-1.3-3-2.2-4.9-2.8-1.8-.5-3.7-.7-5.6-.3-6.8,1.1-12.1,6.3-16.1,11.6-7.5,9.9-12.1,21.8-13.1,34.2l-.6,.2c-5.4,2.3-11,4-16.7,5h-.3c-.4,.1-.9,.1-1.3,.2-.7,.1-1.3,.2-2,.2-1.3,.2-2.6,.2-3.8,.3h-.8c-.8,0-1.7,.1-2.5,.1-2.1,0-4.2,0-6.3-.2h-1.3l-2-.4-.9-.2c.3,2.9,.8,5.8,1.4,8.7,5.1,.6,10.2,.7,15.2,.3h.2c7.4-.7,14.6-2.4,21.6-5,.5,10.5,3.8,20.6,9.7,29.3-2.2,6.6-3.9,13.4-5,20.2-.9,5.6-1.4,11.2-1.5,16.8,1.2,.9,2.3,1.8,3.5,2.6,1.7,1.2,3.3,2.4,5,3.5-.1-2.8-.1-5.6,0-8.4,.1-1.4,.1-2.8,.2-4.2,0-.6,.1-1.2,.1-1.8s.1-.8,.1-.8c.1-.4,.1-.9,.2-1.3,.2-1.4,.4-2.8,.6-4.2,.7-4.5,1.7-8.9,2.9-13.3,.1-.5,.3-1,.4-1.5,3,2.7,6.5,4.9,10.2,6.4,6.8,2.7,14.2,3.5,21.4,2.4,14.2-2.1,26.3-10.4,35.9-20.7,10.2-11,19.2-24.6,20.2-39.9,.5-7.1-1.5-14.2-6.7-19.1h0Zm-87.2,16.4c.3-1.2,.7-2.4,1.1-3.7,.2-.7,.4-1.4,.7-2.1,0-.1,.2-.6,.3-.8s.4-.9,.4-1c1.1-2.7,2.4-5.3,3.9-7.8,1.4-2.3,2.9-4.5,4.7-6.5,.9-1,1.7-2,2.7-2.9,1-1,2.1-2,3.4-2.7,.9-.6,1.9-1.1,3-1.3h1.7c0-.1,.9,.1,.9,.1l.5,.3h.3c.3,.2,.5,.4,.7,.7h0c0,.1,0,.1,0,.2h0c.2,.3,.3,.5,.5,.8v.2l.4,.9c0,.1,.2,.9,.2,.9,0,.5,0,1.1,0,1.6v.5c0,.1,0,.5-.2,.8-.4,1.5-1,3-1.9,4.3-1.7,2.5-3.7,4.9-5.9,7-2.1,2.1-4.2,4.1-6.5,6-1.8,1.5-4.2,3.4-6.6,5-1.7,1.2-3.5,2.2-5.2,3.3-.1-1.4,.2-2.6,.5-3.8h0Zm85.4,2.8c0,.6,0,1.1-.2,1.7,0,.8-.3,1.7-.5,2.5-.4,1.8-.8,3.5-1.4,5.2-2.3,6.3-5.6,12.1-9.7,17.3-4,5.2-8.5,10-13.5,14.3-4.5,3.8-9.7,6.9-15.2,9-2.8,1-5.7,1.8-8.6,2.2-1.5,.2-3,.3-4.5,.3h-3.3l-.3-.2h-.6c-5.9-.7-11.4-3.2-15.8-7.2-.8-.8-1.7-1.6-2.4-2.5,0-.1,.1-.2,.1-.2l.5-1.2c.6-1.4,1.1-2.8,1.7-4.1,2.4-5.5,5.2-10.7,8.4-15.8,.8-1.3,1.6-2.5,2.5-3.7,.4-.5,.8-1.1,1.2-1.7,.6-.9,.5-.6,1.1-1.5,1.8-2.4,3.7-4.7,5.6-6.9,3.9-4.5,8.2-8.7,12.8-12.5,.7-.6,.5-.4,1.2-1l1.8-1.4c1.3-.9,2.5-1.9,3.8-2.8,2.5-1.7,5.1-3.2,7.7-4.5,2.7-1.3,5.5-2.1,8.5-2.6,1.4-.2,2.8-.2,4.3-.2h1.4c.7,.2,1.4,.3,2.1,.5s1.4,.4,2,.6h.3c.3,.1,.7,.3,1,.4,.6,.3,1.2,.6,1.8,1l.7,.4h.3l.2,.3c.5,.4,1.1,.9,1.5,1.3,.2,.2,.5,.5,.7,.8h0v.2c.5,.6,.9,1.1,1.2,1.7,.3,.5,.5,1,.7,1.5,.8,3,1.1,5.9,.8,8.8h0Z" fill="#2c1798"/><path d="M703,424.2c-2.5,5.8-4.7,11.5-6.4,17.3-3.6,12.1-5.6,25-7.8,37.7-.3,2-.7,4.1-1,6.1-3.4,19.2-7.6,37.9-18.9,52.9-15.6,20.8-42.5,31.5-67.8,44.4-6.6,3.3-13.1,6.8-19.2,10.7-18.7,11.8-35.8,29.6-56.4,42.6-9.2,5.8-19,10.6-30,13.4-19.5,5.1-41.4,1.7-64.3-1.2-4.4-.5-8.8-1.1-13.3-1.5-2.7-.3-5.4-.5-8-.7-2.3-.2-4.7-.3-7-.4l1.6-185.7c-.3-.8-.3-1.6,0-2.4l.4-41.9c.5-.1,1.1-.3,1.6-.4l-1-67.4,64.9,16.7,17.2,4.4,8.3,2.1,207.1,53.3Z" fill="#00772a"/><path d="M601.1,582.6c-6.6,3.3-13.1,6.8-19.2,10.7-18.7,11.8-35.8,29.6-56.4,42.6-9.2,5.8-19,10.6-30,13.4-19.5,5.1-41.4,1.7-64.3-1.2-4.4-.5-8.8-1.1-13.3-1.5-2.7-.3-5.4-.5-8-.7-2.3-.2-4.7-.3-7-.4l1.6-185.7c-.3-.8-.3-1.6,0-2.4l.4-41.9c.5-.1,1.1-.3,1.6-.4l-1-67.4,44.1,53,9.9,11.9,4,4.8,21.9,26.3,4.7,5.6,19.8,23.8,5,6,6.8,8.1,4.7,5.7,52.7,63.3,3.9,4.7,18.1,21.7Z" fill="#02340e"/><path d="M525.5,635.9c-9.2,5.8-19,10.6-30,13.4-19.5,5.1-41.4,1.7-64.3-1.2-4.4-.5-8.8-1.1-13.3-1.5-2.7-.3-5.4-.5-8-.7-2.3-.2-4.7-.3-7-.4l1.6-185.7c-.3-.8-.3-1.6,0-2.4l.4-41.9c.5-.1,1.1-.3,1.6-.4l-1-67.4,26.7,64,5.8,14.3,2.4,5.8,23,55.2,2.1,5,.2,.6,2.7,6.6,57.1,136.7Z" fill="#b5e8fb"/><path d="M431.2,648.2c-4.4-.5-8.8-1.1-13.3-1.5-2.7-.3-5.4-.5-8-.7-2.3-.2-4.7-.3-7-.4l1.6-185.7c-.3-.8-.3-1.6,0-2.4l.4-41.9c.5-.1,1.1-.3,1.6-.4l-1-67.4,5.7,66.2,2.8,32.7,.7,8.2,5.5,64.3,1.2,14.2,9.8,114.8Z" fill="#8996a1"/><path d="M417.9,646.6c-2.7-.3-5.4-.5-8-.7-2.3-.2-4.7-.3-7-.4l1.6-185.7c-.3-.8-.3-1.6,0-2.4l.4-41.9c.5-.1,1.1-.3,1.6-.4l-1-67.4,2.8,66.9,1.5,36.4,.4,8.9,7.7,186.7Z" fill="#b6bdc4"/><path d="M402.9,645.5l1.6-185.7c-.3-.8-.3-1.6,0-2.4l.4-41.9c.5-.1,1.1-.3,1.6-.4l.6,39v7.5l2.9,184.3c-2.5,0-4.8-.3-7.1-.4Z" fill="#d6d7d9"/><path d="M566.8,103.4l-41.8,63.2-4.9,7.4-83.9,127-30.9,46.7-.6,67.8-.4,41.9v2.4l-1.6,185.7c-3.9,0-7.9-.2-11.8,0-38.9,1.2-76.3,15-107.6,6.4-36.3-10-58.9-41.7-85.1-62.7-27.1-21.8-63.2-38.1-79.3-69.4-15.1-29.3-7.6-67.6-13-103-4.9-32.2-24.6-66-21.5-101.7,2.6-31,26.6-56.2,35.3-82.2,9.8-29.2,6.9-63.5,24.4-85.9,18.2-23.3,52.9-29.5,79.6-44.8,24.5-14,45.8-41.2,77.6-47.9,27.4-5.8,59.4,9.2,92.2,9.2s70.5-13.7,101-6.1c28.8,7.2,49.9,29.5,72.3,46.1Z" fill="#ccfc51"/><path d="M470.2,369.9c-1.5,7.9-9.3,13.3-14,19.7-2.4,3.3-4.3,7.4-6.6,11.1-2.1,3.3-4.5,6.3-8,8.3-2.9,1.7-6.1,2.4-9.5,2.8-5.3,.6-10.9,.3-15.9,1.1-1.7,.3-3.4,.6-5.1,1.1-1,.2-1.9,.5-2.9,.8-.6,.2-1.2,.3-1.8,.5-.5,.1-1.1,.3-1.6,.4-4.7,1.1-9.5,1.9-14.1,.5-7.7-2.3-13-10.5-20.1-16.4-6-5-15.3-8.2-20.5-16-5.4-8.2-4.1-17.9-5.5-25.6-1.6-8.9-5.5-18-2.4-25.9,3-7.6,12.2-11.8,18.9-17.9,6-5.4,10.4-14.2,18.7-18.1,7.3-3.4,15.9-.9,22.8-1.8,7.8-1,15.5-5.2,22.6-3,4.5,1.5,7.8,5.3,11.2,9.4,1.8,2.1,3.6,4.3,5.7,6.2,3.5,3.2,8.7,5.5,13,9,1.9,1.5,3.6,3.3,5,5.5,.5,.8,1,1.7,1.3,2.6,3,7,1.9,15,3.5,21.6,1.4,6.3,4.8,12.5,5.6,18.5,0,2,.1,3.8-.3,5.6h0Z" fill="#fcf4e7"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChapterTwo