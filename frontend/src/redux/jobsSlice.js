import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [""]
}

export const jobsSlice = createSlice({
    name: "jobsSlice",
    initialState,
    reducers: {


        setJobs: (state, action) => {
            state.jobs = action.payload;
        },


        initializeJobs: (state) => {
            state.jobs = [""];

        }


    }
})


export const { setJobs, initializeJobs } = jobsSlice.actions
export default jobsSlice.reducer