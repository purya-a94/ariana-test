import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

import Header from './layouts/Header'
import Home from './features/home/Home'
import Register from './features/register/Register'
import './App.css'

import Col from 'react-bootstrap/Col'

function App() {
	return (
		<Router>
			<Header />
			<Col sm={12} className="pt-3">
				<Switch>
					<Route
						exact
						path={'/'}
						render={() => <Redirect to="/home" />}
					/>
					<Route exact path={'/home'}>
						<Home />
					</Route>
					<Route exact path={'/register'}>
						<Register />
					</Route>

					<Route
						path={'*'}
						render={() => (
							<div className="w-100 mt-3 text-center">
								404 - Requested page doesn't exist.
							</div>
						)}
					/>
				</Switch>
			</Col>
		</Router>
	)
}

export default App
