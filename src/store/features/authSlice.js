import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn : false,
    userData : null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserLoggedIn : (state, action) => {
        state.isLoggedIn = true ;
        state.userData = action.payload ;
    },
    setUserLoggedOut : (state, action) => {
        state.isLoggedIn = false ;
        state.userData = null ;
    },
    setNonVerifiedUserLoggedIn : (state,action) => {
      state.userData = action.payload ;
    }
  },
})

export const { setUserLoggedIn, setUserLoggedOut, setNonVerifiedUserLoggedIn } = authSlice.actions

export default authSlice.reducer