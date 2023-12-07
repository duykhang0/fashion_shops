import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "./types";
interface IInitStateProduct {
    status: string;
    products: IProduct[]
}

const initState: IInitStateProduct = {
    status: "idle",
    products: []
}

const productSlice = createSlice({
    name: "product",
    initialState: initState,
    reducers:{},
    extraReducers: (builder) => {
     builder
     .addCase(fetchProducts.pending,(state,actions) => {
        state.status = "loading"
     })
     .addCase(fetchProducts.fulfilled,(state,actions) => {
        state.products = actions.payload
        state.status = "idle"
     })
    }   
})

export const fetchProducts = createAsyncThunk("product/fetchProducts",async() => {
    try{
        const response = await fetch("http://localhost:8080/fakestoreapi.com/products")
        const data = await response.json();
        return data
    }catch(error){
        console.log("Error fetching data",error)
    }
})

export const addProduct = createAsyncThunk("product/addProduct",async (dataProduct:IProduct) => {
    try{
        const {name_product,price,product_description,main_image,detail_images,categories} = dataProduct;
        const listCategory = categories?.map((category) => category.id_category)
        const newData = {
            name_product,
            price,
            product_description,
            main_image,
            detail_images,
            listCategory
        }
        const reponse = await fetch("http://localhost:8080/fakestoreapi.com/products",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newData)
        })
        const data = await reponse.json();
        console.log(data)   
       
        
    }catch(error){
        console.log("Error submitting data",error)
    }
})

export default productSlice.reducer;