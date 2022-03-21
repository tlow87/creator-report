import React from 'react'
import './ChapterOne.css'
import { StaticImage } from "gatsby-plugin-image"

const ChapterOne = ({content}) => {
    console.log(content[0]);
    return(
        <div id="Chapter-1" className="chapter_one-container pt-150">
            <div className="base-grid intro pb-160">
                <div className="text-wrapper">
                    <p className="p2 eyebrow kelly-green">Chapter 1</p>
                    <h2 className="kelly-green mt-50">{content[0].headline}</h2>
                    <p className="p1 kelly-green mt-30">{content[0].paragraph}</p>
                </div>
                <div className="f-dir-col f-justify-between images">
                    <div className="f-dir-row f-justify-center image-wrapper">
                        <StaticImage 
                            src="../../images/chapter-1-intro-1.png" 
                            width={182}
                            layout="constrained"
                            placeholder="DOMINANT_COLOR"
                            quality="100"
                            alt="Intro Image 1" 
                            loading="lazy"
                        />
                    </div>
                    <div className="f-dir-row f-justify-end image-wrapper">
                        <StaticImage 
                            src="../../images/chapter-1-intro-2.png" 
                            width={238}
                            layout="constrained"
                            placeholder="DOMINANT_COLOR"
                            quality="100"
                            alt="Intro Image 2" 
                            loading="lazy"
                        />
                    </div>
                    <div className="f-dir-row f-justify-start image-wrapper">
                        <StaticImage 
                            src="../../images/chapter-1-intro-3.png" 
                            width={207}
                            layout="constrained"
                            placeholder="DOMINANT_COLOR"
                            quality="100"
                            alt="Intro Image 3" 
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className="section_1-container bg-white pt-100 pb-80 mlr-20">
                <div className="base-grid">
                    <p className="p1 align-center kelly-green">{content[0].section1_headline}</p>
                    <h4 className="f-justify-center align-center kelly-green citation">{content[0].section1_subhead}<button className="bg-kelly-green peach">1</button></h4>
                    <div className="chart mt-40">
                        <div className="f-dir-row f-justify-center f-align-end chart-items">
                            <svg width="456" height="454" viewBox="0 0 456 454" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.538818" width="455.301" height="454" rx="227" fill="#B7EAFF"/>
                                <text fill="#004C12" fontFamily="Druk Condensed" fontSize="200" letterSpacing="0em"><tspan x="131.23" y="285.7">4.2B</tspan></text>
                                <text fill="#004C12" fontFamily="P22 Mackinac Pro" fontSize="18" letterSpacing="-0.01em"><tspan x="156.508" y="329.765">Social Media Users</tspan></text>
                            </svg>
                            <svg width="345" height="343" viewBox="0 0 345 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.8396" width="343.983" height="343" rx="171.5" fill="#004C12"/>
                                <text fill="#CCFC51" fontFamily="Druk Condensed" fontSize="120" letterSpacing="0em"><tspan x="84.765" y="194.12">~500M</tspan></text>
                                <text fill="white" text-align="center" fontFamily="P22 Mackinac Pro" fontSize="18" letterSpacing="-0.01em"><tspan x="90.8804" y="230.876">Passion Economy Users</tspan></text>
                            </svg>
                            <svg width="225" height="223" viewBox="0 0 225 223" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.82251" width="223.639" height="223" rx="111.5" fill="#CCFC51"/>
                                <text fill="#004C12" fontFamily="Druk Condensed" fontSize="80" letterSpacing="0em"><tspan x="54.472" y="132.535">~200M</tspan></text>
                                <text fill="#004C12" fontFamily="P22 Mackinac Pro" fontSize="18" letterSpacing="-0.01em"><tspan x="85.0374" y="163.45">Creators</tspan></text>
                            </svg>
                        </div>
                    </div>
                    <div className="chart-legend mt-40 pt-40">
                        <div className="f-dir-col item">
                            <p className="p2 fw-800 kelly-green">{content[0].section1_legend.item[0].title}</p>
                            <p className="p3 kelly-green">{content[0].section1_legend.item[0].paragraph}</p>
                        </div>
                        <div className="f-dir-col item">
                            <p className="p2 fw-800 kelly-green">{content[0].section1_legend.item[1].title}</p>
                            <p className="p3 kelly-green">{content[0].section1_legend.item[1].paragraph}</p>
                        </div>
                        <div className="f-dir-col item">
                            <p className="p2 fw-800 kelly-green">{content[0].section1_legend.item[2].title}</p>
                            <p className="p3 kelly-green">{content[0].section1_legend.item[2].paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_2-container ptb-80">
                <div className="base-grid">
                    <div className="f-dir-col">
                        <h4 className="kelly-green">{content[0].section2_headline}</h4>
                        <p className="p1 f-justify-start kelly-green citation">{content[0].section2_subhead}<button className="bg-kelly-green peach">2</button></p>
                    </div>
                    <div className="chart">
                        <div className="f-dir-row f-align-center f-justify-between legend">
                            <p className="p3 kelly-green fw-800">Audience Size</p>
                            <p className="p3 kelly-green fw-800"># of creators</p>
                        </div>
                        {
                            content[0].section2_chart.item.map((item, index) => {
                                return(
                                    <div className="f-dir-row f-align-center f-justify-between item" key={`section2-chartItem-${index}`}>
                                        <div className="f-dir-col">
                                            <p className="p2 kelly-green">{item.title}</p>
                                            <p className="p2 kelly-green">{item.description}</p>
                                        </div>
                                        <p className="p2 kelly-green">{item.value}</p>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ChapterOne