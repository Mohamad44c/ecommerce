import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./bagRedux";

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
});

