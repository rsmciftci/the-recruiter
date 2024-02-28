import { createSlice } from "@reduxjs/toolkit";
// TODO: change it to candidateSlice
const initialState = {
    login: false,
}

export const candidateSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoggedin: (state) => {
            state.login = !state.login
        },

    },
})
export const { setLoggedin } = candidateSlice.actions
export default candidateSlice.reducer