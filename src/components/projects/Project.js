import React from 'react'
import '../../assets/css/Home.css';


function Project({ i, projects, setProjects, projectTitle, 
    projectDes, projectBulls, projectImg, projectLink, show, icons, project }) {

    const handleMouseEnter = (e) => {
        const projectCopy = [...projects]
        projectCopy[i].show = true
        setProjects(projectCopy)
    }

    const handleMouseLeave = (e) => {
        const projectCopy = [...projects]
        projectCopy[i].show = false
        setProjects(projectCopy)
    }

    

  return (
    <div className="project-container" >
        <a href={projectLink} target="_blank" rel="noreferrer" className="dis-a-tag"> 
            <h1 className="project-title">{projectTitle}</h1>
        </a>

        <a href={projectLink} target="_blank" rel="noreferrer" className="dis-a-tag"> 
            <h1 className="project-title" style={{fontSize: '2em'}}>Click to view</h1>
        </a>

        <a href={projectLink} target="_blank" rel="noreferrer">
            <div className="project" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img className="project-img" src={projectImg} alt='Project'/>
            </div>
        </a>
        
        <div className='project-description'>
            { project.githubBack ?
                <h2>Github Repo: 
                    <a className="git-repo" href={project.githubFront} target="_blank" rel="noreferrer">front-end</a>
                      | 
                    <a className="git-repo" href={project.githubBack} target="_blank" rel="noreferrer">back-end</a>
                </h2>
                : 
                <h2>Github Repo:
                    <a href={project.githubFront} target="_blank" rel="noreferrer">Here</a>
                </h2>
            }
            <p className="description-p">{projectDes}</p>
            <ul>
                {projectBulls.map((bull, i) => {
                    return <li key={i} className="bulls">{bull}</li>
                })}
            </ul>

            <div className="p-icons" key={i}>
            {
                icons?.map((icon, i) => {
                    return <img key={i} src={icon} className="p-icon" alt='technology icon'/>
                })
            }
            </div>
        </div>
        
    </div>
  )
}

export default Project