import { createSlice } from "@reduxjs/toolkit";
const feedslice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    profiles: (state, action) => {
      return action.payload;
    },
  },
});

export const {profiles}=feedslice.actions;
export default feedslice.reducer
