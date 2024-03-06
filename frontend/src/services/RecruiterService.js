import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
});


const recruiterService = {
    login: (loginData) => axiosInstance.post("find-recruiter/", loginData),
    saveRecruiter: (recruiter) => axiosInstance.post("recruiter/", recruiter),
    updateRecruiter: (updatedRecruiter) => axiosInstance.put("recruiter/" + updatedRecruiter.id, updatedRecruiter)
  
}



export default recruiterService;
