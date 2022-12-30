import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import About from './pages/About';
// import StartPage from './pages/StartPage';
import Home from './pages/Home';


function App() {

	return (
		<Router>
			<div>
				{/* <Home /> */}
				<Switch>
					<Route exact path="/">
						{/* <StartPage /> */}
						<Home />
					</Route>
					{/* <Route exact path="/home">
					</Route> */}
					<Route exact path="/about">
						<About />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App;