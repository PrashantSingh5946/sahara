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
    ADD_CART_ITEM: (state, action) => {
        if (state.cartItems.find((currentProduct) => currentProduct.id === action.payload.id)) {
            let newProducts = state.cartItems.map((cartItem) =>
              cartItem.id === action.payload.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
            state.cartItems= [...newProducts];
          } else {
            state.cartItems=[...state.cartItems, { ...action.payload, quantity: 1 }];
          }

                      //Calculate and set total no of items
                      let total = 0;
                      let totalItems = 0;
                      for (let i = 0; i < state.cartItems.length; i++) {
                        total += state.cartItems[i].price * state.cartItems[i].quantity;
                        totalItems += state.cartItems[i].quantity;
                      }
                      state.total= total;
                      state.totalNoOfItems=totalItems;
    },
    SET_IS_POPUP_VISIBLE: (state,action) => {
      state.isPopupVisible = action.payload;
    },
    REMOVE_FROM_CART: (state,action) => {
        if (state.cartItems.find((currentProduct) => currentProduct.id === action.payload.id)) {
            if (action.payload.quantity === 1) {
              state.cartItems=state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
            } else {
              let newCartItems = state.cartItems.map((cartItem) =>
                cartItem.id === action.payload.id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              );
              state.cartItems =[...newCartItems];
            }
          }
          let total = 0;
    let totalItems = 0;
    for (let i = 0; i < state.cartItems.length; i++) {
      total += state.cartItems[i].price * state.cartItems[i].quantity;
      totalItems += state.cartItems[i].quantity;
    }
    state.total= total;
    state.totalNoOfItems=totalItems;
      },

      CLEAR_ITEM: (state,action) => {
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload)
        let total = 0;
    let totalItems = 0;
    for (let i = 0; i < state.cartItems.length; i++) {
      total += state.cartItems[i].price * state.cartItems[i].quantity;
      totalItems += state.cartItems[i].quantity;
    }
    state.total= total;
    state.totalNoOfItems=totalItems;
      },

  },
});

//helper functions 

//methods

  const removeFromCart = (product) => {
    
  };

  const clearItem = (id) => {
    setCartItems(c);
  };

 

// Action creators are generated for each case reducer function
export const { ADD_CART_ITEM,SET_IS_POPUP_VISIBLE,REMOVE_FROM_CART,CLEAR_ITEM} = cartSlice.actions;

export default cartSlice.reducer;
