import React from 'react'
import './ChapterThree.css'
import Tip from './Tip/Tip'
import PieCharts from './PieCharts/PieCharts'
import CreatorQuotes from "../CreatorQuotes/CreatorQuotes"

const ChapterThree = ({content}) => {
    console.log(content[0]);
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
                <PieCharts
                    layout='stacked'
                    content={content[0].pieChartsOne}
                />
                <Tip
                    index='2'
                    headline={content[0].tipTwo[0].headline}
                    paragraph={content[0].tipTwo[0].paragraph}
                />
                <PieCharts
                    content={content[0].pieChartsTwo}
                />
                <div className="impact_table-wrapper mt-30 mb-100">
                    <div className="text-wrapper">
                        <p className="p1">{content[0].impactTable[0].eyebrow}</p>
                        <h4 className="citation">{content[0].impactTable[0].headline}<button className="bg-kelly-green white">16</button></h4>
                    </div>
                    <div className="table-wrapper mt-10">
                        <div className="table-row">
                            <p className="p3-ExtraBold align-center">{content[0].impactTable[0].tableColumn[0].title}</p>
                            <p className="p3-ExtraBold align-center">{content[0].impactTable[0].tableColumn[1].title}</p>
                            <p className="p3-ExtraBold align-center">{content[0].impactTable[0].tableColumn[2].title}</p>
                        </div>
                        {
                            content[0].impactTable[0].tableRows.map((item, index) => {
                                return(
                                    <div className="table-row" key={`impact-table-row-${index}`}>
                                        <p className="p2 align-center">{item.title}</p>
                                        <h4 className="align-center">{item.statA}%</h4>
                                        <h4 className="align-center">{item.statB}%</h4>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                <Tip
                    index='3'
                    headline={content[0].tipThree[0].headline}
                    paragraph={content[0].tipThree[0].paragraph}
                />
                <CreatorQuotes 
                    color='peach'
                    quotes={content[0].quotes.items}
                />
            </div>
        </div>
    )
}

export default ChapterThree