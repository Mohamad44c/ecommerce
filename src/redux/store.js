import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./bagRedux";
import userReducer from "./userRedux";
// https://redux-toolkit.js.org/usage/usage-guide
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
// this combines and persists the user to stay logged in and the 
// cart/bag to keep items even if page is refreshed
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

// persistedReducer is to keep the user logged in and not display the login or register pages again
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// to be used in index.js page 
export let persistor = persistStore(store);

