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
    }
  },
})

export const { setUserLoggedIn, setUserLoggedOut } = authSlice.actions

export default authSlice.reducer