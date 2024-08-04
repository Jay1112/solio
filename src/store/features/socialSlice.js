import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showSocialModal : false
}

export const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    setShowSocialModal : (state, action) => {
      console.log(action.payload)
        state.showSocialModal = action.payload ;
    },
  },
})

export const { setShowSocialModal } = socialSlice.actions

export default socialSlice.reducer