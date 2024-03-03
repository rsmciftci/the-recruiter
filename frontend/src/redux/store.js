import { combineReducers, configureStore } from "@reduxjs/toolkit"
import candidateSlice from "./candidateSlice"
import storage from 'redux-persist/lib/storage'
import { persistReducer , persistStore} from 'redux-persist'
import profileSlice from "./profileSlice"
import appliedJobsSlice from "./appliedJobsSlice"
import jobSearchSlice from "./jobSearchSlice"
const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    candidateData : candidateSlice,
    jobSearchSlice : jobSearchSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: {
        data: persistedReducer,
        profilePage : profileSlice,
        appliedJobs : appliedJobsSlice,
        
        
    },
})

export const persistor = persistStore(store)