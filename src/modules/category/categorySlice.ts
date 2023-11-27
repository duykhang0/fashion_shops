import {createSlice,PayloadAction} from "@reduxjs/toolkit";


const initialState = {}
export const counter = createSlice({
        name: "category",
        initialState,
        reducers: {
            addCategogy: (state,actions) => {
                console.log("action payload",actions.payload)
            }
        }
})

export const {addCategogy} = counter.actions;
export default counter.reducer;