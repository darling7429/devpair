import { createSlice } from "@reduxjs/toolkit";

const connectionslice=createSlice({
    name:"connections",
    initialState:[],
    reducers:{
        addconnections:(state,action)=>{
            return action.payload
        },
        removeconnections:()=>{
            return null
        }
    }
})
export const{addconnections,removeconnections}=connectionslice.actions;
export default connectionslice.reducer;
