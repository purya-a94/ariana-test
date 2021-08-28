import React from 'react'
import { NavLink } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Header() {
	return (
		<Navbar bg="light" expand="md">
			<Container>
				<Navbar.Brand>Ariana Test</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Item>
							<NavLink
								to="/users"
								className="nav-link"
								activeStyle={{
									borderBottom: '2px solid #37474F',
								}}
							>
								Users
							</NavLink>
						</Nav.Item>
						<Nav.Item>
							<NavLink
								to="/register"
								className="nav-link"
								activeStyle={{
									borderBottom: '2px solid #37474F',
								}}
							>
								Register
							</NavLink>
						</Nav.Item>
						<Nav.Item>
							<NavLink
								to="/overview"
								className="nav-link"
								activeStyle={{
									borderBottom: '2px solid #37474F',
								}}
							>
								Overview
							</NavLink>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
