import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from "@/modules/category/categorySlice"
import productReducer from "@/modules/product/productSlice";
export const store = configureStore({
    reducer:{
        category: categoryReducer,
        products: productReducer}

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;