import React from 'react'
import './Tip.css'

const Tip = (props) => {
    return(
        <div className="tip-wrapper bg-sky-blue p-40">
            <div className="f-dir-row f-justify-between">
                <p className="p2 eyebrow bg-kelly-green white">{`Tip ${props.index}`}</p>
                <h4>{props.headline}</h4>
            </div>
            <p className="p2">{props.paragraph}</p>
        </div>
    )
}

export default Tip