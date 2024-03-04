import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
});


const recruiterService = {
    login: (loginData) => axiosInstance.post("find-recruiter/", loginData),
  
}



export default recruiterService;
