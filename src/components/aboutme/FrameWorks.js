import React, { useState } from 'react';


function FrameWorks() {

    const [frameIcons, setFrameIcons] = useState([
        {
            title: "React",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: "react icon",
            link: "https://reactjs.org"
        },
        {
            title: "Django",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            alt: "django icon",
            link: "https://www.djangoproject.com"
        },
        {
            title: "Node.js",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            alt: "node js icon",
            link: "https://nodejs.org/en/"
        },
        {
            title: "Express",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            alt: "express icon",
            link: "https://expressjs.com"
        },
        {
            title: "Bootstrap",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            alt: "boot strap icon",
            link: "https://getbootstrap.com"
        }
    ])

    return (
        <div className="frame-container">
            <h1 className="frame-title">Frame Works</h1>
            <div className="icons-container">
                {
                    frameIcons.map((icon, index) => {
                        return(
                            <a href={icon?.link} target="_blank" className="remove-a-style">
                                <div className="icon" key={index}>
                                    <img src={icon.svg} className="frame-icon" alt={icon.alt} />
                                    <h2>{icon.title}</h2>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FrameWorks