import React, { useState } from 'react'

function Techs() {

    const [tech, setTech] = useState([
        {
            title: "Handle Bars",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg",
            alt: "handle bars icon",
            link: "https://handlebarsjs.com"
        },
        {
            title: "Git",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            alt: "git icon",
            link: "https://git-scm.com"
        },
        {
            title: "GitHub",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            alt: "github icon",
            link: "https://github.com"
        },
        {
            title: "Heroku",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
            alt: "heroku icon",
            link: "https://www.heroku.com"
        },
        {
            title: "Illustrator",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
            alt: "Illustrator icon",
            link: "https://www.adobe.com/products/illustrator.html"
        },
        {
            title: "Visualstudio",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
            alt: "visualstudio icon",
            link: "https://visualstudio.microsoft.com"
        },
        {
            title: "VS Code",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            alt: "vs code icon",
            link: "https://code.visualstudio.com"
        },
        {
            title: "Unity",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
            alt: "unity icon",
            link: "https://unity.com"
        },
        {
            title: "Blender",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
            alt: "blender icon",
            link: "https://www.blender.org"
        },
        {
            title: "Photoshop",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
            alt: "photo shop icon",
            link: "https://www.adobe.com/products/photoshop.html"
        },
    ])

  return (
    <div className="langs-container">
        <h1 className="tech-title">Technologies</h1>
        <div className="tech-icons-container">
            {
                tech.map((icon, index) => {
                    return(
                        <a href={icon?.link} target="_blank" rel="noreferrer" className="remove-a-style">
                            <div className="icon" key={index}>
                                <img src={icon.svg} className="dev-icon" alt={icon.alt} />
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

export default Techs