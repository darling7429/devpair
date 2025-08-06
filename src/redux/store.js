import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userslice";
import feedreducer from "./slices/feedslice";
import requestreducer from "./slices/requests";
import connectionreducer from "./slices/connections"
const store = configureStore({
  reducer: {
    user: useReducer,
    feed:feedreducer,
    requests:requestreducer,
    connections:connectionreducer
  }
});
export default store;
