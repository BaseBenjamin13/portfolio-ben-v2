import React, { useState } from 'react';

function LangsAndDatabases() {

    const [icons, setIcons] = useState([
        {
            title: "JavaScript",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            alt: "javascript icon"
        },
        {
            title: "Python",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            alt: "python icon"
        },
        {
            title: "HTML",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            alt: "html icon"
        },
        {
            title: "CSS",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            alt: "css icon"
        },
        {
            title: "PSQL",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            alt: "sql icon"
        },
        {
            title: "MongoDB",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            alt: "mongo db icon"
        },
    ])

  return (
    <div className="langs-container">
        <h1 className="about-me-title">Languages and Databases</h1>
        <div className="icons-container">
            {
                icons.map(icon => {
                    return(
                        <div className="icon">
                            <img src={icon.svg} className="dev-icon" alt={icon.alt} />
                            <h2>{icon.title}</h2>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default LangsAndDatabases