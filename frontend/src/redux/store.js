import { configureStore } from "@reduxjs/toolkit"
import candidateSlice from "./candidateSlice"

export const store = configureStore({
    reducer : {
        candidateData : candidateSlice
    },
})