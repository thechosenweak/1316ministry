import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShow: true,
}

const slice = createSlice({
  name: 'onBoarding',
  initialState,
  reducers: {
    setOnBoarding: (state, action) => {
      state.isShow = action.payload
    }
  },
})

export const { setOnBoarding } = slice.actions

export default slice.reducer