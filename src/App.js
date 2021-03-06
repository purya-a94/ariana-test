import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

import Header from './layouts/Header'
import Users from './features/users/Users'
import Register from './features/register/Register'
import Overview from './features/overview/Overview'
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
						render={() => <Redirect to="/users" />}
					/>
					<Route exact path={'/users'}>
						<Users />
					</Route>
					<Route exact path={'/register'}>
						<Register />
					</Route>
					<Route exact path={'/overview'}>
						<Overview />
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
