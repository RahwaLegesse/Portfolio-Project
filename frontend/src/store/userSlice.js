import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserdetails : (state, action) =>{
      state.user = action.payload
    }
  },
} )
export const { setuserdetails } = userSlice.actions

export default userSlice.reducer