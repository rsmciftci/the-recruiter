import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: false,
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        dataFunc: (state) => {
            state.value = !(state.value)
        },

    },
})
export const { dataFunc } = dataSlice.actions
export default dataSlice.reducer