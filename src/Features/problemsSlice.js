import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}

const problemsSlice=createSlice({
    name:"problems",
    initialState,
    reducers:{}
})

export default problemsSlice.reducer;