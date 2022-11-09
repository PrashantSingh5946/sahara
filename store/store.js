import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userReducer'
import cartReducer from './slices/cartReducer'


export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
})