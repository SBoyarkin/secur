import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import  tokenReducer from './features/tokenSlice.js'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    token: tokenReducer,
  },
})