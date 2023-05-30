import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import profileImg from '../assets/imgs/profile.jpeg';

function Header() {

    const titles = useRef();

    useEffect(() => {
        init(titles.current, {
            showCursor: true,
            backDelay: 1800,
            backSpeed: 60,
            strings: ['Engineer', 'Developer']
          })
    }, [])
    
  return (
    <div className="header">
        <div className="headerItem">
            <a href="https://github.com/BaseBenjamin13" target="_blank" rel="noreferrer">
                <button className="header-btn">Github</button>
            </a>
        </div>
        <div className="headerItem">
            <h1 id="welcome">Welcome To My Portfolio</h1>
            <img src={profileImg} id="profile-img"/>
            <h1 id="name">Benjamin Morgiewicz</h1>
            <h1 className='the-software'>The Software <span ref={titles}></span></h1>
            <div className="email-container">
                <a className="email-me" href="mailto:benmorgiewicz@gmail.com">benmorgiewicz@gmail.com</a>
                <a className="resume" href="https://docs.google.com/document/d/13UiQ3TOMY6_9RDQqnfWd92x5trSAhSIbrGzdXgJZ_Gk/edit?usp=sharing" target="_blank" rel="noreferrer">My Resume</a>
            </div>
        </div>
        <div className="headerItem">
            <a href="https://www.linkedin.com/in/benjamin-morgiewicz/" target="_blank" rel="noreferrer">
                <button className="header-btn">Linkedin</button>
            </a>
        </div>
 
    </div>
  )
}

export default Header