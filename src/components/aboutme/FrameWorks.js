import React, { useState } from 'react';

function FrameWorks() {

    const [frameIcons, setFrameIcons] = useState([
        {
            title: "React",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: "react icon"
        },
        {
            title: "Django",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            alt: "django icon"
        },
        {
            title: "Node.js",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            alt: "node js icon"
        },
        {
            title: "Express",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            alt: "express icon"
        },
        {
            title: "Bootstrap",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            alt: "boot strap icon"
        }
    ])

    return (
        <div className="frame-container">
            <h1 className="frame-title">Frame Works</h1>
            <div className="icons-container">
                {
                    frameIcons.map(icon => {
                        return(
                            <div className="icon">
                                <img src={icon.svg} className="frame-icon" alt={icon.alt} />
                                <h2>{icon.title}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FrameWorks