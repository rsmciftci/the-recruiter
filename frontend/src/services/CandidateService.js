import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
});


const candidateService = {
    findUser: (loginData) => axiosInstance.post("find-candidate/", loginData),
    updateUser: (updatedData) => axiosInstance.put("candidate/" + updatedData.id, updatedData),

    updatePhoto: (data, id) => axiosInstance.put("candidate-photo/" + id, data),
    updateCV: (data, id) => axiosInstance.put("candidate-cv/" + id, data),

    findAppliedJobs: (candidate_id) => axiosInstance.get("jobadvert-by-candidateid/" + candidate_id),

}



export default candidateService;
