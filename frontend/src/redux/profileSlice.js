import { createSlice } from "@reduxjs/toolkit";
// TODO: change it to candidateSlice
const initialState = {
    isProfileEditOpen: false,

}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {

        openProfileEdit: (state) => {
            state.isProfileEditOpen = true
        },
        closeProfileEdit: (state) => {
            state.isProfileEditOpen = false
        },
    }
})
export const { openProfileEdit, closeProfileEdit } = profileSlice.actions
export default profileSlice.reducer