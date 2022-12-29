import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/css/StartPage.css';


function StartPage() {
  return (
    <div className="start-page">
		<div className="div-mywork">
        <h1 className="welcome">Welcome To Ben's Portfolio</h1> 
			<Link to='/home' ><button className="work-btn">My Work</button></Link>
		</div>
	</div>
  )
}

export default StartPage;