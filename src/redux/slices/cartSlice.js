import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const checkIfPresent = state.value.find(
        (product) => product.id === action.payload.id,
      );

      if (checkIfPresent) {
        return alert("Product already present in cart");
      }

      state.value.push(action.payload);
    },
    increaseProductQuantity: (state, action) => {
      const item = state.value.find((product) => product.id === action.payload);

      if (item) item.quantity += 1;
    },
    decreaseProductQuantity: (state, action) => {
      const item = state.value.find((product) => product.id === action.payload);

      if (item) item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      const item = state.value.filter((product) => product.id !== action.payload);
      state.value = item;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeFromCart,
} = cartSlice.actions;
