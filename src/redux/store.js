import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userslice";
const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
export default store;
