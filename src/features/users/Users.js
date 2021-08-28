import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from './usersSlice'

import FilterField from '../../components/FilterField'
import UsersTable from '../../components/UsersTable'

function Users() {
	const usersList = useSelector((state) => state.users.list)
	const dispatch = useDispatch()

	const [tableData, setTableData] = useState(null)

	useEffect(() => {
		setTableData(usersList)
	}, [usersList])

	const filterUsers = (query) => {
		setTableData((prevState) => {
			return prevState.filter(
				(item) =>
					item.firstName.toLowerCase().includes(query) ||
					item.lastName.toLowerCase().includes(query)
			)
		})
	}

	const removeFilter = () => {
		setTableData(usersList)
	}

	const removeUserHandler = (userId) => {
		dispatch(removeUser(userId))
	}

	return (
		<div className="container pt-3">
			<div className="row justify-content-center">
				{usersList && usersList.length > 0 ? (
					<>
						<div className="col-12 col-md-7 col-lg-5 mb-3">
							<FilterField
								filterHandler={filterUsers}
								clearHandler={removeFilter}
							/>
						</div>
						<div className="col-12 col-md-10">
							<UsersTable
								data={tableData}
								rowsPerPage={3}
								removeUserHandler={removeUserHandler}
							/>
						</div>
					</>
				) : (
					// No data view
					<div className="w-100 text-center">
						No data available for now.
					</div>
				)}
			</div>
		</div>
	)
}

export default Users
