import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    post: []
}

export const postSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    
  },
})

export const {  } = postSlice.actions

export default postSlice.reducer