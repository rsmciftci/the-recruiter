import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "http://localhost:8000/api/",
});

const candidateService = {
    findUser: (loginData) => axiosInstance.post("find-candidate/", loginData),
    updateUser: (updatedData) => axiosInstance.put("candidate/"+updatedData.id, updatedData),

}



export default candidateService;
