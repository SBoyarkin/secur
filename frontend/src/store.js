import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import  tokenReducer from './features/tokenSlice.js'
import  availibleReducer from './features/availibleSlice.js'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    token: tokenReducer,
    availible: availibleReducer,
  },
})