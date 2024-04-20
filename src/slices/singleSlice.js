import { createSlice } from "@reduxjs/toolkit";

export const singleSlice = createSlice({
  name: "counter",
  initialState: {
    cartitem: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findproduct = state.cartitem.findIndex(
        (item) => item.id == action.payload.id
      );
      if (findproduct !== -1) {
        state.cartitem[findproduct].qun += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartitem));
      } else {
        state.cartitem = [...state.cartitem, action.payload];
        localStorage.setItem("cart", JSON.stringify(state.cartitem));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = singleSlice.actions;

export default singleSlice.reducer;
