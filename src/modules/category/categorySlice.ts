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
                state.categories.push(actions.payload);
                
            }) 
            .addCase(updateCategory.fulfilled,(state,actions) => {
                const id_category = actions.payload.id_category
                const indexCategory = state.categories.findIndex((category) => category.id_category === id_category)
                state.categories[indexCategory] = actions.payload;  
            }) 
            .addCase(deleteCategoryById.fulfilled,(state,actions) => {
                const id_category = actions.payload.id_category;
                const indexCategory = state.categories.findIndex(category => category.id_category === id_category)
                state.categories.splice(indexCategory,1);
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
export const  addNewCategogy = createAsyncThunk('category/addNewCategogy', async (newCategory:ICategories) => {
   
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
});

// Update Category by id 
export const updateCategory = createAsyncThunk('category/updateCategoryById', async (dataUpdate:ICategories) => {
    const {id_category} = dataUpdate;
    
    try{
        const response = await fetch(`http://localhost:8080/fakestoreapi.com/category/${id_category}`,{
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataUpdate)
        })
        const data = await response.json();
        return data;
        
    }catch(error){
        console.log("Error submitting data",error);
        throw error;
    }
})

//delete category thunk
export const deleteCategoryById = createAsyncThunk('category/deleteCategoryById', async (dataDelete: ICategories) => {
    const {id_category} = dataDelete;
    try{

        const response = await fetch(`http://localhost:8080/fakestoreapi.com/category/${id_category}`,{
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataDelete)
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