import React from 'react'
import './ChapterThree.css'

const Tip = (props) => {
    return(
        <div className="tip-container bg-sky-blue p-40">
            <p className="p2">{`Tip ${props.index}`}</p>

        </div>
    )
}

export default Tip