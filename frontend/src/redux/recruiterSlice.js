import { createSlice } from "@reduxjs/toolkit";

export const baseURL = "http://localhost:8000"
export const default_female_photo = baseURL + "/static/default_images/female.jpg"
export const default_male_photo = baseURL + "/static/default_images/male.jpg"


// TODO: change it to candidateSlice
const initialState = {
    login: false,
    id : "",
    first_name: "",
    surname: "",
    phone: "",
    email: "",
    company: ""

}


export const recruiterSlice = createSlice({
    name: "recruiterSlice",
    initialState,
    reducers: {
        updateRecruiterLogin: (state) => {
            state.login = !state.login
        },
        setRecruiter: (state, action) => {
            state.id = action.payload.id;
            state.first_name = action.payload.first_name;
            state.surname = action.payload.surname;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
            state.company = action.payload.company;
        },


        initailizeRecruiter: (state) => {
            state.login = false;
            state.id = "";
            state.first_name = "";
            state.surname = "";
            state.phone = "";
            state.email = "";
            state.company = "";
        }


    }
})


export const { updateRecruiterLogin, setRecruiter, initailizeRecruiter } = recruiterSlice.actions
export default recruiterSlice.reducer