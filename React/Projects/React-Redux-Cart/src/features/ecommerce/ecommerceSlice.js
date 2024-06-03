// ecommerceSlice.js
import { createSlice } from '@reduxjs/toolkit';
import CardsData from '../../Components/CardsData'

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState: {
    Cardsdata: CardsData
  },
  reducers: {
    addQuantity: (state, action) => {
      const product = state.Cardsdata.find(item => item.id === action.payload);
      if (product) {
        product.qnty += 1;
      }
    },
    removeQuantity: (state, action) => {
      const product = state.Cardsdata.find(item => item.id === action.payload);
      if (product) {
        product.qnty -= 1;
      }
    },
  },
});

export const { addQuantity , removeQuantity } = ecommerceSlice.actions;
export default ecommerceSlice.reducer;
