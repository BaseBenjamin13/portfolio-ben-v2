import React from 'react';

import BrandStatement from '../components/aboutme/BrandStatement';
import LangsAndDatabases from '../components/aboutme/LangsAndDatabases';
import FrameWorks from '../components/aboutme/FrameWorks';
import Techs from '../components/aboutme/Techs';

function About() {
  return (
    <div className="about">

        <BrandStatement />

        <LangsAndDatabases />

        <FrameWorks />

        <Techs />

    </div>
  )
}

export default About