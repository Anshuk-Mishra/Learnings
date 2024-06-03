import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from '../features/ecommerce/ecommerceSlice'

export const store = configureStore({
    reducer: ecommerceReducer
})