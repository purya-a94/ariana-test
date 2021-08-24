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
	},
})

export const { addUser } = usersSlice.actions
export default usersSlice.reducer
