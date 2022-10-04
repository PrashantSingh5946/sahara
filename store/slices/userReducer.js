import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    value: null,
  },
  reducers: {
    login: (state,action) => {

      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login,logout } = userSlice.actions

export default userSlice.reducer