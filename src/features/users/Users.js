import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from './usersSlice'

import Table from 'react-bootstrap/Table'

function Users() {
	const usersList = useSelector((state) => state.users.list)
	const dispatch = useDispatch()

	return (
		<div className="container pt-3">
			<div className="row justify-content-center">
				<div className="col-12 col-md-10">
					{usersList && usersList.length > 0 ? (
						// Main view
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
								{usersList.map((user, idx) => {
									return (
										<tr key={user.id}>
											<td>{idx + 1}</td>
											<td>{user.firstName}</td>
											<td>{user.lastName}</td>
											<td>{user.birthdate}</td>
											<td>
												{user.skills.map(
													(skill, idx) => {
														return (
															<p key={idx}>
																{skill.title}:{' '}
																{skill.level}
															</p>
														)
													}
												)}
											</td>
											<td>
												<button
													className="btn btn-danger"
													onClick={(e) =>
														dispatch(
															removeUser(user.id)
														)
													}
												>
													Remove
												</button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</Table>
					) : (
						// No data view
						<div className="w-100 text-center">
							No data available for now.
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Users
