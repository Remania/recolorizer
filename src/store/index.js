import { configureStore } from '@reduxjs/toolkit'
import colorsReducer from './features/colorSlice'

export default configureStore({
  reducer: {
    colors: colorsReducer
  },
})