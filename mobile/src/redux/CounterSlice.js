import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userEmail: null,
  userReferralCode: null,
  inviterReferralCode: null,
  subscription: [],
  appSecurityAuth: true,
  onBoardingScreenShow: false,
  notificationData: [],
}

export const counterSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.userEmail = action.payload
    },
    setUserReferralCode: (state, action) => {
      state.userReferralCode = action.payload
    },
    setInviterReferralCode: (state, action) => {
      state.inviterReferralCode = action.payload
    },
    setSubscription: (state, action) => {
      state.subscription = action.payload;
    },
    setAppSecurityAuth: (state, action) => {
      state.appSecurityAuth = action.payload;
    },
    setOnBoardingScreenShow: (state, action) => {
      state.onBoardingScreenShow = action.payload;
    },
    setNotificationData: (state, action) => {
      state.notificationData = action.payload;
    }
  },
})

export const { setUserEmail, setSubscription, setUserReferralCode, setInviterReferralCode, setAppSecurityAuth, setOnBoardingScreenShow, setNotificationData } = counterSlice.actions

export default counterSlice.reducer