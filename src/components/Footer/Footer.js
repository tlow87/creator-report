import React from 'react'
import './Footer.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Footer = ({content}) => {
    let image = getImage(content[0].image);
    return (
        <div className="footer-container bg-kelly-green plr-20 pt-40 pb-20">
            <h2 className="neon-green uppercase">{content[0].headline}</h2>
            <div className="image-wrapper">
                <GatsbyImage image={image} alt="" objectFit="contain" />
            </div>
            <div className="about-wrapper mt-50 mb-120">
                <div className="f-dir-col f-align-end">
                    <h4 className="sky-blue">{content[0].subhead}</h4>
                </div>
                <div className="f-dir-col f-align-start">
                    <p className="p2 white" dangerouslySetInnerHTML={{ __html: content[0].paragraph }}/>
                    <div className="f-dir-row f-align-center mt-20">
                        <a className="mr-20" href="https://www.facebook.com/">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.0615 12.9015C24.0607 6.62637 18.8977 1.5402 12.5294 1.54102C6.16111 1.54183 0.999176 6.62934 1 12.9045C1.00082 18.4935 5.12664 23.2521 10.7292 24.1256L10.7292 16.186L7.80123 16.186L7.80123 12.9015L10.7289 12.9015L10.7289 10.3983C10.7289 7.55075 12.4503 5.97764 15.0843 5.97764C15.9491 5.98955 16.8117 6.06367 17.6655 6.19948L17.6655 8.99591L16.2115 8.99591C15.2992 8.8766 14.4613 9.50882 14.3403 10.4078C14.3241 10.5279 14.3213 10.6496 14.3323 10.7703L14.3323 12.9018L17.5302 12.9018L17.019 16.1862L14.3323 16.1862L14.3323 24.1259C19.9354 23.251 24.061 18.4914 24.0615 12.9015Z" stroke="#CCFC51" strokeWidth="1.67818" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a className="mr-20" href="https://www.instagram.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8347 22.1727C8.75596 22.1727 8.3543 22.16 7.14905 22.1056C6.16015 22.0613 5.40299 21.9203 4.69412 21.649C4.02505 21.3928 3.52509 21.072 3.02212 20.5766C2.51916 20.081 2.19383 19.5884 1.93384 18.9291C1.65847 18.2306 1.51543 17.4845 1.47041 16.5101C1.4155 15.3225 1.40234 14.9264 1.40234 11.893C1.40234 8.8596 1.41523 8.46354 1.47041 7.27593C1.51543 6.3015 1.65847 5.55539 1.93384 4.85689C2.19383 4.19762 2.51943 3.70472 3.02212 3.20939C3.52509 2.71378 4.02505 2.39321 4.69412 2.13702C5.40299 1.86568 6.16015 1.72474 7.14905 1.68037C8.35485 1.62627 8.75678 1.61328 11.8347 1.61328C14.9129 1.61328 15.3145 1.626 16.5206 1.68037C17.5095 1.72474 18.2667 1.86568 18.9756 2.13702C19.6446 2.39321 20.1449 2.71405 20.6476 3.20939C21.1505 3.70499 21.4758 4.19762 21.7358 4.85689C22.0112 5.55539 22.1542 6.30123 22.1993 7.27593C22.2542 8.46354 22.2673 8.8596 22.2673 11.893C22.2673 14.9264 22.2545 15.3225 22.1993 16.5101C22.1542 17.4845 22.0112 18.2306 21.7358 18.9291C21.4758 19.5884 21.1502 20.081 20.6476 20.5766C20.1446 21.0722 19.6446 21.3928 18.9756 21.649C18.2667 21.9203 17.5095 22.0613 16.5206 22.1056C15.3151 22.16 14.9134 22.1727 11.8347 22.1727Z" stroke="#CCFC51" strokeWidth="1.67818" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17.9599 6.34455C18.2343 6.34455 18.4568 6.12532 18.4568 5.85489C18.4568 5.58446 18.2343 5.36523 17.9599 5.36523C17.6854 5.36523 17.4629 5.58446 17.4629 5.85489C17.4629 6.12532 17.6854 6.34455 17.9599 6.34455Z" stroke="#CCFC51" strokeWidth="1.67818" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.8359 16.6859C14.5208 16.6859 16.6973 14.5412 16.6973 11.8957C16.6973 9.25012 14.5208 7.10547 11.8359 7.10547C9.15108 7.10547 6.97461 9.25012 6.97461 11.8957C6.97461 14.5412 9.15108 16.6859 11.8359 16.6859Z" stroke="#CCFC51" strokeWidth="1.67818" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a href="https://www.tiktok.com/">
                            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.8532 6.6916C19.6677 6.6916 17.0851 4.14703 17.0851 1.00785V1L12.926 1L12.926 17.2662H12.9233C12.9233 19.1618 11.3636 20.6986 9.43988 20.6986C7.51616 20.6986 5.95649 19.1618 5.95649 17.2662C5.95649 15.3706 7.51616 13.8338 9.43988 13.8338C9.45168 13.8338 9.46267 13.8367 9.47447 13.837L9.47447 9.72935C9.46047 9.72935 9.44702 9.72637 9.43301 9.72637C5.20726 9.72637 1.78125 13.1023 1.78125 17.2665C1.78125 21.4307 5.20726 24.8063 9.43329 24.8063C13.6593 24.8063 17.0851 21.4307 17.0851 17.2665L17.0851 8.92696C18.7685 10.117 20.7894 10.7549 22.8611 10.7503V10.7354L22.8532 6.6916Z" stroke="#CCFC51" strokeWidth="1.67818" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="f-dir-row f-align-center f-justify-between copyright-wrapper ptb-20">
                <p className="p2 peach">© 2022 Linktree</p>
                <p className="p2 peach">All rights reserved</p>
                <a className="p2 neon-green" href="#Hero">Scroll to top  ↑</a>
            </div>
        </div>
    )
}

export default Footer