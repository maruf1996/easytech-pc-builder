import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  components: [],
};

export const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(state);
      const exist = state.components?.find(
        (item) => item.category && item.product_name === action.payload.category
      );
      if (!exist) {
        state.components.push(action.payload);
      } else {
        alert("Already selected this product.");
      }
    },
    removeItem: (state, action) => {
      const categoryToRemove = action.payload;
      state.components = state.components.filter(
        (item) => item.category !== categoryToRemove
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
