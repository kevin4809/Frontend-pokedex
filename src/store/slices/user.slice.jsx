import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
    name: 'user',
    initialState: "Kevin Jimenez",
    reducers: {
        changeName: (state, action) => action.payload
    }
})

export const { changeName } = userSlice.actions

export default userSlice.reducer;