import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./ProductsSlice";

//Mode dev
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
