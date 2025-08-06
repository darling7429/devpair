import { createSlice } from "@reduxjs/toolkit";
const requestsslice=createSlice({
    name:"requests",
    initialState:[],
    reducers:{
        addrequests:(state,action)=>{
            return action.payload;

        }
    }
})
export const{addrequests}=requestsslice.actions;
export default requestsslice.reducer
