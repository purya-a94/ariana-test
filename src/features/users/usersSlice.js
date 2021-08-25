import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	list: [],
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.list.push(action.payload)
		},
		removeUser: (state, action) => {
			state.list.splice(
				state.list.findIndex((el) => el.id === action.payload),
				1
			)
		},
	},
})

export const { addUser, removeUser } = usersSlice.actions

export default usersSlice.reducer
