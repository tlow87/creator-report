import React from 'react'
import './Footer.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Footer = ({content}) => {
    return (
        <div className="footer-container bg-kelly-green plr-20 pt-40 pb-20">
            <div className="f-dir-row f-align-center f-justify-between copyright-wrapper ptb-20">
                <p className="p2 peach">© 2022 Linktree</p>
                <p className="p2 peach">All rights reserved</p>
                <a className="p2 neon-green" href="#Hero">Scroll to top  ↑</a>
            </div>
        </div>
    )
}

export default Footer