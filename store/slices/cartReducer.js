import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    isPopupVisible: false,
    total: 0,
    totalNoOfItems: 0,
  },
  reducers: {
    SET_CART_ITEMS: (state, action) => {
      state.cartItems.push(action.payload); 
    },
    SET_IS_POPUP_VISIBLE: (state,action) => {
      state.isPopupVisible = action.payload;
    },
    SET_TOTAL :(state,action) => {
        state.total = action.payload;
      },
      SET_TOTAL_NO_OF_ITEMS :(state,action) => {
        state.totalNoOfItems = action.payload;
      },
  },
});

// Action creators are generated for each case reducer function
export const { SET_CART_ITEMS,SET_IS_POPUP_VISIBLE,SET_TOTAL,SET_TOTAL_NO_OF_ITEMS } = cartSlice.actions;

export default cartSlice.reducer;
