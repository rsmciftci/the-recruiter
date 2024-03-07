import { combineReducers, configureStore } from "@reduxjs/toolkit"
import candidateSlice from "./candidateSlice"
import storage from 'redux-persist/lib/storage'
import { persistReducer , persistStore} from 'redux-persist'
import profileSlice from "./profileSlice"
import appliedJobsSlice from "./appliedJobsSlice"
import jobSearchSlice from "./jobSearchSlice"
import recruiterSlice from "./recruiterSlice"
import jobsSlice from "./jobsSlice"
import candidateSearchSlice from "./candidateSearchSlice"
const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({
    candidateData : candidateSlice,
    jobSearchSlice : jobSearchSlice,
    recruiterSlice : recruiterSlice,
    jobsSlice : jobsSlice,
    candidateSearchSlice : candidateSearchSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),

    reducer: {
        data: persistedReducer,
        profilePage : profileSlice,
        appliedJobs : appliedJobsSlice,
        
        
    },
})

export const persistor = persistStore(store)