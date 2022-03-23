import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import './Hero.css'


const Hero = ({content}) => {
    return(
        <div id="Hero" className="hero-container">
            <div className="plr-20">
                <div className="f-dir-row f-justify-between pt-30 pb-20">
                    <p className="p2 peach">Linktree presents</p>
                    <p className="p2 peach">The 2022</p>
                    <a href="#ToC" className="p2 neon-green">Scroll to discover  ↓</a>
                </div>
                <h1 className="neon-green uppercase align-center">{content[0].headline}</h1>
                <div className="named-layout">
                    <div className="image-wrapper">
                        <StaticImage 
                            src="../../images/hero-image.png" 
                            layout="fullWidth"
                            placeholder="DOMINANT_COLOR"
                            quality="100"
                            alt="Hero Image" 
                            loading="eager"
                        />
                    </div>
                    <h4 className="sky-blue">{content[0].subhead}</h4>
                    <p className="p2 white">{content[0].paragraph}</p>
                </div>
                <div id="ToC" className="toc-wrapper">
                    <p className="p2 align-center neon-green">Jump to chapter:</p>
                    <div className="links-wrapper pt-30 pb-60">
                        <a href="#Chapter-1">
                            <svg viewBox="0 0 448 268" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="green-fill" d="M185.447 57.6314C192.633 49.7378 199.501 41.7621 206.892 34.3297C219.129 22.0279 232.823 11.6124 249.074 4.98988C258.19 1.27883 267.624 -0.832964 277.572 0.458728C290.107 2.08872 299.428 8.65994 306.07 19.1985C311.726 28.1788 314.396 38.1638 315.751 48.5691C316.151 51.6446 316.387 54.6585 316.777 58.3285C317.588 57.3034 318.101 56.7293 318.584 56.1142C331.478 39.8245 345.86 25.0931 363.466 13.7959C372.931 7.70653 382.971 3.05234 394.171 0.889274C412.65 -2.67825 428.941 4.59008 438.314 20.8592C444.135 30.9672 446.64 42.0696 447.553 53.5513C449.822 83.2807 443.231 111.493 432.719 138.957C419.517 173.412 400.895 204.566 374.964 231.087C361.988 244.414 347.616 255.824 330.225 262.949C320.986 266.721 311.521 268.854 301.481 267.531C289.45 265.953 280.334 259.771 273.763 249.796C267.737 240.713 264.935 230.493 263.498 219.831C263.066 216.653 262.8 213.455 262.409 209.713C260.243 212.378 258.416 214.685 256.537 216.95C243.993 231.979 230.113 245.532 213.267 255.752C203.556 261.647 193.31 266.199 181.885 267.521C165.274 269.438 152.001 263.82 142.597 249.878C136.438 240.775 133.676 230.4 132.229 219.687C131.808 216.612 131.572 213.434 131.202 209.805C130.473 210.635 129.991 211.148 129.56 211.691C116.666 227.991 102.304 242.743 84.7289 254.081C75.192 260.232 65.0494 264.948 53.7981 267.111C35.1964 270.689 18.8943 263.369 9.52166 246.926C3.78307 236.879 1.30901 225.859 0.44668 214.459C-1.82206 184.73 4.76858 156.507 15.291 129.044C28.4826 94.5984 47.115 63.4338 73.0362 36.9234C86.0122 23.5964 100.384 12.1864 117.775 5.05139C127.804 0.950781 138.193 -1.30454 149.044 0.868782C163.837 3.83147 173.046 13.4371 178.877 26.7539C182.314 35.03 184.394 43.8049 185.036 52.7415L185.447 57.6314Z" fill="#CCFC51"/>
                                <mask id="path-2-inside-1_664_2563" fill="white">
                                <path d="M44.7304 262C32.0304 262 21.3805 255.59 14.7305 244C10.0505 235.8 7.33045 226 6.43045 214.06C4.43045 188.42 9.07045 162.06 20.8904 131.24C34.6104 95.4 53.0704 65.93 77.3404 41.12C91.7004 26.36 105.28 16.67 120.06 10.6C127.59 7.52 134.28 6.02 140.49 6.02C142.972 6.02064 145.447 6.26515 147.88 6.75C159.6 9.12 167.7 16.2 173.37 29.12C176.55 36.7815 178.471 44.9061 179.06 53.18L180.63 71.86L189.89 61.68C191.89 59.46 193.89 57.24 195.89 55.03C201.06 49.26 205.94 43.82 211.16 38.57C224.25 25.4 237.4 16.24 251.35 10.57C258.73 7.57 265.35 6.11 271.66 6.11C273.382 6.10903 275.103 6.21926 276.81 6.44C287.16 7.78 295.07 13.01 301 22.44C305.56 29.67 308.36 38.23 309.81 49.38C310.05 51.24 310.24 53.14 310.43 55.16C310.55 56.37 310.68 57.64 310.82 59L312.38 73.62L321.49 62.09C321.9 61.57 322.23 61.18 322.49 60.84C322.75 60.5 323.04 60.18 323.29 59.84C337.69 41.65 351.49 28.63 366.7 18.84C376.47 12.55 385.83 8.61 395.3 6.78C397.906 6.26843 400.555 6.00724 403.21 6C415.86 6 426.47 12.34 433.11 23.85C437.9 32.18 440.59 41.77 441.56 54.03C443.56 79.63 438.92 105.94 427.11 136.81C413.44 172.61 394.94 202.12 370.68 226.89C356.31 241.65 342.74 251.34 327.96 257.4C320.5 260.4 313.81 261.92 307.51 261.92C305.758 261.922 304.008 261.808 302.27 261.58C292.27 260.27 284.61 255.34 278.78 246.49C273.96 239.23 271 230.49 269.45 219.03C269.16 216.89 268.94 214.67 268.71 212.31C268.61 211.31 268.5 210.21 268.39 209.09L266.89 194.7L257.76 205.93C256.95 206.93 256.19 207.87 255.45 208.79C254.24 210.3 253.09 211.72 251.93 213.12C237.93 229.93 224.62 241.85 210.17 250.62C199.63 257.02 190.43 260.49 181.17 261.56C179.361 261.768 177.542 261.875 175.72 261.88C163.72 261.88 154.51 256.88 147.54 246.52C142.71 239.38 139.73 230.6 138.15 218.88C137.87 216.88 137.68 214.81 137.47 212.59C137.37 211.497 137.26 210.367 137.14 209.2L135.75 195.5L126.66 205.84L126.08 206.51C125.58 207.06 125.19 207.51 124.83 207.96C110.4 226.2 96.6204 239.25 81.4504 249.04C71.5804 255.4 62.1504 259.39 52.6404 261.22C50.0342 261.729 47.3858 261.99 44.7304 262Z"/>
                                </mask>
                                <path d="M44.7304 262C32.0304 262 21.3805 255.59 14.7305 244C10.0505 235.8 7.33045 226 6.43045 214.06C4.43045 188.42 9.07045 162.06 20.8904 131.24C34.6104 95.4 53.0704 65.93 77.3404 41.12C91.7004 26.36 105.28 16.67 120.06 10.6C127.59 7.52 134.28 6.02 140.49 6.02C142.972 6.02064 145.447 6.26515 147.88 6.75C159.6 9.12 167.7 16.2 173.37 29.12C176.55 36.7815 178.471 44.9061 179.06 53.18L180.63 71.86L189.89 61.68C191.89 59.46 193.89 57.24 195.89 55.03C201.06 49.26 205.94 43.82 211.16 38.57C224.25 25.4 237.4 16.24 251.35 10.57C258.73 7.57 265.35 6.11 271.66 6.11C273.382 6.10903 275.103 6.21926 276.81 6.44C287.16 7.78 295.07 13.01 301 22.44C305.56 29.67 308.36 38.23 309.81 49.38C310.05 51.24 310.24 53.14 310.43 55.16C310.55 56.37 310.68 57.64 310.82 59L312.38 73.62L321.49 62.09C321.9 61.57 322.23 61.18 322.49 60.84C322.75 60.5 323.04 60.18 323.29 59.84C337.69 41.65 351.49 28.63 366.7 18.84C376.47 12.55 385.83 8.61 395.3 6.78C397.906 6.26843 400.555 6.00724 403.21 6C415.86 6 426.47 12.34 433.11 23.85C437.9 32.18 440.59 41.77 441.56 54.03C443.56 79.63 438.92 105.94 427.11 136.81C413.44 172.61 394.94 202.12 370.68 226.89C356.31 241.65 342.74 251.34 327.96 257.4C320.5 260.4 313.81 261.92 307.51 261.92C305.758 261.922 304.008 261.808 302.27 261.58C292.27 260.27 284.61 255.34 278.78 246.49C273.96 239.23 271 230.49 269.45 219.03C269.16 216.89 268.94 214.67 268.71 212.31C268.61 211.31 268.5 210.21 268.39 209.09L266.89 194.7L257.76 205.93C256.95 206.93 256.19 207.87 255.45 208.79C254.24 210.3 253.09 211.72 251.93 213.12C237.93 229.93 224.62 241.85 210.17 250.62C199.63 257.02 190.43 260.49 181.17 261.56C179.361 261.768 177.542 261.875 175.72 261.88C163.72 261.88 154.51 256.88 147.54 246.52C142.71 239.38 139.73 230.6 138.15 218.88C137.87 216.88 137.68 214.81 137.47 212.59C137.37 211.497 137.26 210.367 137.14 209.2L135.75 195.5L126.66 205.84L126.08 206.51C125.58 207.06 125.19 207.51 124.83 207.96C110.4 226.2 96.6204 239.25 81.4504 249.04C71.5804 255.4 62.1504 259.39 52.6404 261.22C50.0342 261.729 47.3858 261.99 44.7304 262Z" stroke="#00370D" strokeWidth="4" mask="url(#path-2-inside-1_664_2563)"/>
                                <text className="title" fill="#00370D" fontFamily="Druk" fontSize="48" letterSpacing="0em"><tspan x="148.25" y="135.612">CHAPTER 1</tspan></text>
                                <text className="description" fill="#00370D" fontFamily="P22 Mackinac Pro" fontSize="18" letterSpacing="-0.01em"><tspan x="130.615" y="165.486">Meet your fellow creators</tspan></text>
                            </svg>
                        </a>
                        <a href="#Chapter-2">
                            <svg viewBox="0 0 448 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect className="green-fill" y="0.5" width="448" height="259" rx="129.5" fill="#CCFC51"/>
                                <rect className="green-fill" x="7" y="7.5" width="434" height="245" rx="122.5" fill="#CCFC51" stroke="#00370D" strokeWidth="2"/>
                                <text className="title" fill="#00370D" fontFamily="Druk" fontSize="48" letterSpacing="0em"><tspan x="145.18" y="131.112">CHAPTER 2</tspan></text>
                                <text className="description" fill="#00370D" fontFamily="P22 Mackinac Pro" fontSize="18" letterSpacing="-0.01em"><tspan x="135.604" y="160.986">Sharing common ground</tspan></text>
                            </svg>
                        </a>
                        <a href="#Chapter-3">
                            <svg viewBox="0 0 448 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="green-fill" d="M417.788 117C435.925 105.931 448 85.967 448 63.1367C448 28.3476 419.858 0.130859 385.162 0.130859C362.392 0.130859 342.481 12.2873 331.441 30.4231C320.401 12.2873 300.49 0.130859 277.721 0.130859C254.951 0.130859 235.04 12.2873 224 30.4231C212.96 12.2873 193.049 0.130859 170.279 0.130859C147.51 0.130859 127.599 12.2873 116.559 30.4231C105.519 12.2873 85.6079 0.130859 62.8383 0.130859C28.1417 0.130859 0 28.3476 0 63.1367C0 85.967 12.1241 105.931 30.2117 117C12.1241 128.07 0 148.034 0 170.864C0 205.653 28.1417 233.87 62.8383 233.87C85.6079 233.87 105.519 221.714 116.559 203.578C127.599 221.763 147.51 233.87 170.279 233.87C193.049 233.87 212.96 221.714 224 203.578C235.04 221.763 254.951 233.87 277.721 233.87C300.49 233.87 320.401 221.714 331.441 203.578C342.481 221.763 362.392 233.87 385.162 233.87C419.858 233.87 448 205.653 448 170.864C448 148.034 435.876 128.07 417.788 117Z" fill="#CCFC51"/>
                                <path d="M385.171 226.861H385.167C375.56 226.892 366.11 224.429 357.742 219.711C349.373 214.993 342.373 208.182 337.428 199.946L337.426 199.942L332.306 191.502L331.453 190.096L330.597 191.5L325.457 199.93L325.455 199.933C320.487 208.149 313.482 214.943 305.119 219.659C296.756 224.375 287.317 226.853 277.716 226.853C268.114 226.853 258.676 224.375 250.313 219.659C241.949 214.943 234.945 208.149 229.976 199.933L229.976 199.932L224.856 191.492L224.002 190.085L223.146 191.491L218.016 199.921L218.015 199.923C213.047 208.139 206.042 214.933 197.679 219.649C189.316 224.365 179.877 226.843 170.276 226.843C160.674 226.843 151.236 224.365 142.873 219.649C134.509 214.933 127.505 208.139 122.536 199.923L122.536 199.922L117.416 191.482L116.562 190.075L115.706 191.481L110.578 199.909C106.162 207.127 100.165 213.25 93.0395 217.814C85.9138 222.378 77.845 225.265 69.4413 226.258C61.0376 227.25 52.5183 226.322 44.5253 223.544C36.5324 220.765 29.2744 216.209 23.2985 210.217C17.3225 204.226 12.7845 196.957 10.0264 188.957C7.26831 180.957 6.36215 172.435 7.37621 164.034C8.39027 155.633 11.2981 147.571 15.8805 140.457C20.4629 133.343 26.6004 127.362 33.8303 122.965L33.8321 122.964L42.1922 117.854L43.5867 117.001L42.1929 116.148L33.8329 111.028L33.8288 111.025C23.3727 104.69 15.277 95.1072 10.7778 83.7396C6.27857 72.372 5.62298 59.8443 8.91111 48.0692C12.1992 36.2941 19.2504 25.9185 28.9882 18.5265C38.7259 11.1344 50.6151 7.13216 62.8407 7.13065L62.8432 7.13065C72.45 7.10564 81.899 9.57339 90.2668 14.2927C98.6345 19.0121 105.635 25.8216 110.583 34.0558L110.586 34.0602L115.706 42.4802L116.56 43.884L117.415 42.481L122.545 34.061L122.546 34.0579C127.513 25.8398 134.517 19.0431 142.88 14.3254C151.244 9.6077 160.683 7.12891 170.286 7.12891C179.888 7.12891 189.327 9.6077 197.691 14.3254C206.054 19.0431 213.058 25.8398 218.025 34.0579L218.026 34.0602L223.146 42.4802L224 43.884L224.855 42.481L229.985 34.061L229.986 34.0579C234.953 25.8398 241.957 19.0431 250.32 14.3254C258.684 9.6077 268.123 7.12891 277.726 7.12891C287.328 7.12891 296.767 9.6077 305.131 14.3254C313.494 19.0431 320.498 25.8398 325.465 34.0579L325.466 34.0602L330.586 42.4802L331.44 43.884L332.295 42.481L337.425 34.061L337.428 34.0558C342.376 25.8216 349.377 19.0121 357.744 14.2927C366.112 9.57339 375.561 7.10564 385.168 7.13065L385.17 7.13065C397.39 7.14212 409.271 11.1505 419 18.5443C428.73 25.9381 435.773 36.3115 439.057 48.0821C442.341 59.8527 441.685 72.3743 437.188 83.737C432.691 95.0997 424.601 104.68 414.152 111.016L414.148 111.018L405.788 116.138L404.395 116.991L405.789 117.844L414.159 122.964L414.162 122.966C424.616 129.299 432.71 138.879 437.21 150.243C441.71 161.606 442.369 174.13 439.085 185.903C435.802 197.676 428.758 208.052 419.027 215.447C409.295 222.842 397.412 226.851 385.19 226.861H385.171Z" stroke="#00370D" strokeWidth="2"/>
                                <text className="title" fill="#00370D" fontFamily="Druk" fontSize="48" letterSpacing="0em"><tspan x="145.367" y="118.743">CHAPTER 3</tspan></text>
                                <text className="description" fill="#00370D" fontFamily="P22 Mackinac Pro" fontSize="18" letterSpacing="-0.01em"><tspan x="145" y="148.617">The future for creators</tspan></text>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero