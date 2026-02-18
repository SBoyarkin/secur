import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  organizations: [],
}

export const availibleSlice = createSlice({
  name: 'availible',
  initialState,
  reducers: {
    setOrganizations: (state, action) => {
      state.organizations = action.payload
    },
  },
})
export const { setOrganizations, } = availibleSlice.actions

export default availibleSlice.reducer