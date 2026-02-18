import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import  tokenReducer from './features/tokenSlice.js'
import  availibleReducer from './features/availibleSlice.js'
import  userReducer from './features/userSlice.js'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    token: tokenReducer,
    availible: availibleReducer,
    user: userReducer,
  },
})