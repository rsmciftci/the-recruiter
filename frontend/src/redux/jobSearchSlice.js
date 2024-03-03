import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobSearchText: ""

}

export const jobSearchSlice = createSlice({
    name : "jobSearchSlice",
    initialState,
    reducers: {

        setJobSearchText: (state, action) => {
            state.jobSearchText = action.payload;
        }
    }
})


export const { setJobSearchText } = jobSearchSlice.actions
export default jobSearchSlice.reducer