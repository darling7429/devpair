import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userslice";
import feedreducer from "./slices/feedslice"
const store = configureStore({
  reducer: {
    user: useReducer,
    feed:feedreducer
  },
});
export default store;
