import { createSlice } from "@reduxjs/toolkit";

export const baseURL = "http://localhost:8000"
export const default_female_photo =  baseURL + "/static/default_images/female.jpg"
export const default_male_photo = baseURL + "/static/default_images/male.jpg"


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
    gender: "",
    currentPosition: "",
    id: "",
    cv: "",
    photo: ""

}

const baseUrl = ""

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
            state.currentPosition = action.payload.current_position;
            state.id = action.payload.id;
            state.cv = action.payload.cv;
            state.photo = action.payload.photo;
        },
        setCandidateWithoutCVandPhoto: (state, action) => {
            state.firstName = action.payload.first_name;
            state.surname = action.payload.surname;
            state.email = action.payload.email;
            state.dateOfBirth = action.payload.date_of_birth;
            state.phone = action.payload.phone;
            state.city = action.payload.city;
            state.town = action.payload.town;
            state.postcode = action.payload.postcode;
            state.gender = action.payload.gender;
            state.currentPosition = action.payload.current_position;
            state.id = action.payload.id;
        },

        setPhotoState: (state, action) => {
            state.photo = action.payload;
        },

        setCVState: (state, action) => {
            state.cv = action.payload;
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
            state.cv = "";
            state.id = "";
            state.photo = "";
            state.default_female = "default_images/female.jpg";
            state.default_male = "default_images/male.jpg";
            state.currentPosition = "";
        }


    }
})


export const { setLoggedin, setCandidate, initailize, setPhotoState, setCVState, setCandidateWithoutCVandPhoto } = candidateSlice.actions
export default candidateSlice.reducer