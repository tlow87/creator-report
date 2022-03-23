import React from 'react'
import './PieCharts.css'

const PieCharts = ({layout, content}) => {
    return(
        <div className={`pie_charts-wrapper ptb-100`}>
            {
                content.map((item, index) => {
                    return(
                        <div className={`piechart ${ layout === 'stacked' ? 'stacked' : '' }`} key={`chapter-3-pie-chart${index}`}>
                            <img src={item.image.publicURL} alt=""/>
                            <div className="f-dir-col text-wrapper">
                                <h4>{item.stat}<span>%</span></h4>
                                <p className="p2 citation"><span dangerouslySetInnerHTML={{ __html: item.paragraph }} /><button className="bg-kelly-green white">{item.footnote}</button></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PieCharts