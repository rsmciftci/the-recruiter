import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    candidateSearchText: ""

}

export const candidateSearchSlice = createSlice({
    name: "candidateSearchSlice",
    initialState,
    reducers: {

        setCandidateSearchText: (state, action) => {
            state.candidateSearchText = action.payload;
        },

        
    }
})

export const { setCandidateSearchText } = candidateSearchSlice.actions
export default candidateSearchSlice.reducer