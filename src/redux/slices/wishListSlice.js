import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    addToWishList: (state, action) => {
      const checkIfPresent = state.value.find(
        (product) => product.id === action.payload.id,
      );

      if (checkIfPresent) return alert("Product already present in wishlist");

      state.value.push(action.payload);
    },
  },
});

export default wishListSlice.reducer;
export const { addToWishList } = wishListSlice.actions;
