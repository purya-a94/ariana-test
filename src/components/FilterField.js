import React, { useState } from 'react'

function FilterField({ filterHandler, clearHandler }) {
	const [searchQuery, setSearchQuery] = useState('')

	const search = (e) => {
		e.preventDefault()

		filterHandler(searchQuery.trim().toLowerCase())
	}

	const clearField = (e) => {
		setSearchQuery('')

		clearHandler()
	}

	return (
		<form onSubmit={search}>
			<div className="input-group">
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="form-control"
					placeholder="Filter first or last names..."
				/>
				<button type="submit" className="btn btn-primary">
					Filter
				</button>
				<button
					type="button"
					onClick={clearField}
					className="btn btn-outline-secondary"
				>
					Clear
				</button>
			</div>
		</form>
	)
}

export default FilterField
