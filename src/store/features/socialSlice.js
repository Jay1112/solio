import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showSocialModal : false,
    platformsList : null,
    userPlatformsList : null
}

export const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    setShowSocialModal : (state, action) => {
      state.showSocialModal = action.payload ;
    },
    setPlatformsList : (state, action) => {
      if(Array.isArray(action.payload) || action.payload === null){
        state.platformsList = action.payload;
      }
    },
    setUserPlatformsList : (state, action) => {
      if(Array.isArray(action.payload) || action.payload === null){
        state.userPlatformsList = action.payload;
      }
    }
  },
})

export const { setShowSocialModal, setPlatformsList, setUserPlatformsList } = socialSlice.actions

export default socialSlice.reducer