import React, {useEffect, useState} from 'react'
import './Footnotes.css'
const Footnotes = ({footnoteActive, setfootnoteActive, toggleFootnote}) => {
    const [footnoteVisible, setfootnoteVisible] = useState(false);

    useEffect(() => {
        const chOne = document.getElementById('Chapter-1');
        window.addEventListener('scroll', () => {
            const chOneTop = chOne.getBoundingClientRect().top;
            if (chOneTop <= 0) {
                setfootnoteVisible(true);
            } else {
                setfootnoteVisible(false);
                setfootnoteActive(false);
            }
        });
        return;
    }, [])

    return(
        <div>
            <button className={`sticky-button bg-neon-green ${ footnoteVisible ? '' : 'hidden' }`} onClick={toggleFootnote}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#004C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 10.667H16.0133" stroke="#004C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.668 16H16.0013V21.3333H17.3346" stroke="#004C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className={`footnotes-wrapper ${ footnoteActive ? 'active' : '' }`}>
                <button className="close-button bg-neon-green" onClick={toggleFootnote}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.6666 22.3333L15.6666 9" stroke="#004C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.6666 22.3333L10.3333 17" stroke="#004C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.6667 22.3333L21 17" stroke="#004C12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <div className="footnotes bg-kelly-green p-50">
                    <h4 className="neon-green uppercase pb-10 mb-10 ">Footnotes</h4>
                    <p className="p3 white">*Beginner creators: &#60;12 months of experience</p>
                    <p className="p3 white">**Experienced creators: 3+ years of experience</p>
                    <p className="p2-ExtraBold white mt-20">Methodology</p>
                    <p className="p3 white mt-10"><span className="fw-800">Linktree Creator Economy Research (2021):</span> Referenced internal Linktree data and external data from Statista, Omnicore Agency, Global Media Insight, and the social media platforms referenced. Total active users for each platform were broken down by the number of followers. TikTok analysis did not include Douyin.</p>
                    <p className="p3 white mt-10"><span className="fw-800">Linktree Creator Survey (2021):</span> Surveyed 9,576 Linktree users. The survey had a 95% completion rate. Response rates to individual questions varied due to open-ended questions and qualitative data. Percentages for all quantitative data were rounded to the nearest tenth or the nearest whole number as fit.</p>
                    <p className="p3 white mt-10"><span className="fw-800">Linktree Creator Outreach (2021):</span> Emailed select creators on Linktree with interview questions. Responses were tweaked for flow and length with respondents’ permission and approval. Follower counts noted are from early February 2022.</p>
                    <p className="p2-ExtraBold white mt-40">Sources</p>
                    <p className="p3 white">1-2: Linktree, Creator Economy Research, 2021.</p>
                    <p className="p3 white">3-19: Linktree, Creator Survey, n=9,576, 2021.</p>
                </div>
            </div>
        </div>
    )
}

export default Footnotes