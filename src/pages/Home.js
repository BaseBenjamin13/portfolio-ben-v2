import React from 'react';
import Header from '../components/Header'; 
import ProjectList from '../components/projects/ProjectList';
import GitHistory from '../components/GitHistory';
import About from './About';

function Home() {
  return (
    <div className="home">
        <Header />
        <GitHistory />
        
        <About />

        <h1 className="my-projects-header">My Projects</h1>
        <ProjectList />

    </div>
  )
}

export default Home