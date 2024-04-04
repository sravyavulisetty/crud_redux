import { configureStore } from "@reduxjs/toolkit";
import crudSlice from "./crudSlice";
const store = configureStore({
    reducer: {
        users: crudSlice
    }
})
export default store;