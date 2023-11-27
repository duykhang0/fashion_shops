import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from "@/modules/category/categorySlice"

export const store = configureStore({
    reducer:{categoryReducer}

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;