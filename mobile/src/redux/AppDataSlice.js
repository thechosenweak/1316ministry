import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: null,
}

export const counterSlice = createSlice({
  name: 'appData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const { setUserData } = counterSlice.actions

export default counterSlice.reducer