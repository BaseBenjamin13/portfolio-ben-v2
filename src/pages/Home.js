import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'; 
import ProjectList from '../components/projects/ProjectList';
import GitHistory from '../components/GitHistory';
import About from './About';

function Home() {
  return (
    <div className="home">
        <Header />
        <GitHistory />
        {/* <div className="headerItem">    
            <Link className="nav-link" to="/about">
                <button className="btn-header-about">About Me</button>
            </Link>
        </div> */}

        <h1 className="my-projects-header">My Projects</h1>
        <ProjectList />
        <About />

    </div>
  )
}

export default Home