import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

import Header from './layouts/Header'
import './App.css'

function App() {
	return (
		<div className="App">
			<Header />
		</div>
	)
}

export default App
