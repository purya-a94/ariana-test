import React, { useState, useEffect } from 'react'
import { chunkLongArray } from '../app/helpers'

import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'

function UsersTable({ data, rowsPerPage, removeUserHandler }) {
	const initialState = {
		pageData: [],
		activePage: 1,
	}
	const [innerData, setInnerData] = useState(initialState)

	useEffect(() => {
		data &&
			setInnerData((prevState) => {
				return {
					pageData: chunkLongArray(data, rowsPerPage),
					activePage: 1,
				}
			})
	}, [data, rowsPerPage])

	return (
		<div className="w-100 d-flex flex-column">
			<Table responsive striped className="align-middle">
				<thead className="table-dark">
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Birthdate</th>
						<th>Skills</th>
						<th>Remove User</th>
					</tr>
				</thead>

				<tbody>
					{innerData.pageData.length > 0 ? (
						innerData.pageData[innerData.activePage - 1].map(
							(user, idx) => {
								return (
									<tr key={user.id}>
										<td>{idx + 1}</td>
										<td>{user.firstName}</td>
										<td>{user.lastName}</td>
										<td>{user.birthdate}</td>
										<td>
											{user.skills.map((skill, idx) => {
												return (
													<p key={idx}>
														{skill.title}:{' '}
														{skill.level}
													</p>
												)
											})}
										</td>
										<td>
											<button
												className="btn btn-danger"
												onClick={(e) =>
													removeUserHandler(user.id)
												}
											>
												Remove
											</button>
										</td>
									</tr>
								)
							}
						)
					) : (
						<tr>
							<td colSpan="6" className="text-center py-3">
								No users found.
							</td>
						</tr>
					)}
				</tbody>
			</Table>

			<Pagination className="align-self-center">
				{innerData.pageData.map((page, idx) => {
					return (
						<Pagination.Item
							key={idx}
							active={innerData.activePage === idx + 1}
							onClick={() =>
								setInnerData((prevState) => {
									return { ...prevState, activePage: idx + 1 }
								})
							}
						>
							{idx + 1}
						</Pagination.Item>
					)
				})}
			</Pagination>
		</div>
	)
}

export default UsersTable
