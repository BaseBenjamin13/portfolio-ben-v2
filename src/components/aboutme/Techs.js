import React, { useState } from 'react'

function Techs() {

    const [tech, setTech] = useState([
        {
            title: "Handle Bars",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg",
            alt: "handle bars icon"
        },
        {
            title: "Git",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            alt: "git icon"
        },
        {
            title: "GitHub",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            alt: "github icon"
        },
        {
            title: "Heroku",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
            alt: "heroku icon"
        },
        {
            title: "Illustrator",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
            alt: "Illustrator icon"
        },
        {
            title: "Visualstudio",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
            alt: "visualstudio icon"
        },
        {
            title: "VS Code",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            alt: "vs code icon"
        },
        {
            title: "Unity",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
            alt: "unity icon"
        },
        {
            title: "Blender",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
            alt: "blender icon"
        },
        {
            title: "Photoshop",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
            alt: "photo shop icon"
        },
    ])

  return (
    <div className="langs-container">
        <h1 className="tech-title">Technologies</h1>
        <div className="tech-icons-container">
            {
                tech.map((icon, index) => {
                    return(
                        <div className="icon" key={index}>
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

export default Techs