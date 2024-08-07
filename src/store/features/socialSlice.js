import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showSocialModal : false,
    platformsList : null
}

export const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    setShowSocialModal : (state, action) => {
      console.log(action.payload)
        state.showSocialModal = action.payload ;
    },
    setPlatformsList : (state, action) => {
      if(Array.isArray(action.payload) || action.payload === null){
        state.platformsList = action.payload;
      }
    },
  },
})

export const { setShowSocialModal, setPlatformsList } = socialSlice.actions

export default socialSlice.reducer