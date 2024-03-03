import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appliedJobList: []

}

export const appliedJobsSlice = createSlice({
    name : "appliedJobsSlice",
    initialState,
    reducers: {

        setAppliedJobs: (state, action) => {
            state.appliedJobList = action.payload;
        },


        initailize_appliedJobs: (state) => {
            state.appliedJobList = []
        }
    }
})


export const { setAppliedJobs, initailize_appliedJobs } = appliedJobsSlice.actions
export default appliedJobsSlice.reducer