import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState(); // Load state from localStorage if it exists

const store = configureStore({
  reducer: {
    cart: cartReducer, // Your reducer
  },
  preloadedState: {
    cart: preloadedState, // Preload the cart state from localStorage
  },
});

store.subscribe(() => {
  saveState(store.getState().cart); // Save cart state to localStorage on state change
});

export default store;
