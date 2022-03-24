import React from 'react'
import './PieCharts.css'

const PieCharts = ({layout, content, toggleFootnote}) => {
    return(
        <div className={`pie_charts-wrapper ${ layout === 'stacked' ? 'stacked' : '' } ptb-100`}>
            {
                content.map((item, index) => {
                    return(
                        <div className={`piechart`} key={`chapter-3-pie-chart${index}`}>
                            <img src={item.image.publicURL} alt=""/>
                            <div className="f-dir-col text-wrapper">
                                <h4>{item.stat}<span>%</span></h4>
                                <p className="p2 citation"><span dangerouslySetInnerHTML={{ __html: item.paragraph }} /><button className="bg-kelly-green white" onClick={toggleFootnote}>{item.footnote}</button></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PieCharts