import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import Resume from '../assets/imgs/Benjamin-Morgiewicz-Resume.docx';


function Header() {

    const titles = useRef();

    useEffect(() => {
        init(titles.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Engineer', 'Developer', 'Designer']
          })
    }, [])
    
  return (
    <div className="header">
        <div className="headerItem">
            <a href="https://github.com/BaseBenjamin13" target="_blank" rel="noreferrer">
                <button className="btn-header-project">Github</button>
            </a>
        </div>
        <div className="headerItem">
            <h1 id="welcome">Welcome To My Portfolio</h1>
            <h1>Benjamin Morgiewicz</h1>
            <h1>The Software <span ref={titles}></span></h1>
            <h1>Email Me</h1>
            <a className="email-me" href="mailto:benmorgiewicz@gmail.com">benmorgiewicz@gmail.com</a>
            <a className="resume" href={Resume} target="_blank" rel="noreferrer">My Resume</a>
        </div>
        <div className="headerItem">
            <a href="https://www.linkedin.com/in/benjamin-morgiewicz/" target="_blank" rel="noreferrer">
                <button className="btn-header-project">Linkedin</button>
            </a>
        </div>
 
    </div>
  )
}

export default Header