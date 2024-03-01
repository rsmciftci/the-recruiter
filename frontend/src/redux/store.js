import { combineReducers, configureStore } from "@reduxjs/toolkit"
import candidateSlice from "./candidateSlice"
import storage from 'redux-persist/lib/storage'
import { persistReducer , persistStore} from 'redux-persist'
import profileSlice from "./profileSlice"
const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    candidateData : candidateSlice,
    // profilePage : profileSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: {
        data: persistedReducer,
        profilePage : profileSlice,
    },
})

export const persistor = persistStore(store)