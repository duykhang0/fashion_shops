import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { ICategories } from "./type";

//
interface IInitiStateCategory {
    status: string;
    categories: ICategories[]
}
const initialState:IInitiStateCategory = {
    status: 'idle',
    categories: []
}
const categorySlice = createSlice({
        name: "category",
        initialState: initialState,
        reducers: {
            
        },
        extraReducers:  (builder) => {
            builder
            .addCase(fetchCategories.pending,(state,actions) => {

                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled,(state,actions) => {
                
                state.categories = actions.payload;
                state.status = "idle";
            })
            
            .addCase(addNewCategogy.fulfilled,(state,actions) => {
                console.log("state.categories",state.categories)
                state.categories.push(actions.payload);
                
            }) 
            
        }
})  

// get all category
export const fetchCategories = createAsyncThunk('category/fetchCategories',async () => {
    try{
        const reponse = await fetch('http://localhost:8080/fakestoreapi.com/category')
        const data = await reponse.json();
        return data;
    }catch(error){
        console.log("Error submitting data",error);
    }
    
})

// add category
export const  addNewCategogy = createAsyncThunk('category/addNewCategogy', async (newCategory:any,{rejectWithValue}) => {
   
    try{
        const response = await fetch("http://localhost:8080/fakestoreapi.com/category",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCategory)
        })
        
        const data = await response.json();
        return data;    
    }catch(error){
        console.log("Error submitting data",error);
        throw error;
    }
})




export const {} = categorySlice.actions;
export default categorySlice.reducer;