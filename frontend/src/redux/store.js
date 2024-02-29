import { configureStore } from "@reduxjs/toolkit"
import candidateSlice from "./candidateSlice"
import storage from 'redux-persist/lib/storage'
import { persistReducer , persistStore} from 'redux-persist'
import { thunk } from "redux-thunk"
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, candidateSlice)

export const store = configureStore({
    reducer: {
        candidateData: candidateSlice,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: [thunk]
    },
})

export const persistor = persistStore(store)