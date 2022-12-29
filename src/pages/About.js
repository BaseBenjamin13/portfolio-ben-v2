import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header'; 
import BrandStatement from '../components/aboutme/BrandStatement';
import LangsAndDatabases from '../components/aboutme/LangsAndDatabases';
import FrameWorks from '../components/aboutme/FrameWorks';
import Techs from '../components/aboutme/Techs';

function About() {
  return (
    <div className="about">
        <Header />
        <div className="headerItem">    
            <Link className="nav-link" to="/">
                <button className="btn-header-home">Home</button>
            </Link>
        </div>

        <BrandStatement />

        <LangsAndDatabases />

        <FrameWorks />

        <Techs />

    </div>
  )
}

export default About