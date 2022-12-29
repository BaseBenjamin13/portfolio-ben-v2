import React, { useState } from 'react'
import Project from './Project'
import ProjectData from '../../assets/ProjectsData'


function ProjectList() {

    const [projects, setProjects] = useState(ProjectData)
    
  return (
    <div className="project-list">
        
        {
            projects.map((project, i) => {
                return (
                    <Project
                        key={i}
                        i={i}
                        project={project}
                        projects={projects}
                        setProjects={setProjects}
                        projectTitle={project.title}
                        projectDes={project.des}
                        projectBulls={project.bulls}
                        projectImg={project.img}
                        projectLink={project.link}
                        show={project.show}
                        icons={project.icons}
                    />
                )
            })
        }

    </div>
  )
}

export default ProjectList