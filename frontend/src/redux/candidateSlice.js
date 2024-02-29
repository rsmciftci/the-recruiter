import { createSlice } from "@reduxjs/toolkit";
// TODO: change it to candidateSlice
const initialState = {
    login: false,
    firstName: "",
    surname: "",
    email: "",
    dateOfBirth: "",
    phone: "",
    city: "",
    town: "",
    postcode: "",
    gender: ""

}

export const candidateSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLoggedin: (state) => {
            state.login = !state.login
        },
        setCandidate: (state, action) => {
            state.firstName = action.payload.first_name;
            state.surname = action.payload.surname;
            state.email = action.payload.email;
            state.dateOfBirth = action.payload.date_of_birth;
            state.phone = action.payload.phone;
            state.city = action.payload.city;
            state.town = action.payload.town;
            state.postcode = action.payload.postcode;
            state.gender = action.payload.gender;
        },

        initailize: (state) => {
            state.login = false;
            state.firstName = "";
            state.surname = "";
            state.email = "";
            state.dateOfBirth = "";
            state.phone = "";
            state.city = "";
            state.town = "";
            state.postcode = "";
            state.gender = "";
        }

               
    }
})
export const { setLoggedin, setCandidate, initailize } = candidateSlice.actions
export default candidateSlice.reducer