import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
});


const jobService = {

    findJobsByTitle: (title) => axiosInstance.get("jobadvert-by-title/" + title),
    appJob: (job_id,candidate_id) => axiosInstance.put("jobadvert-apply/"+job_id+"/"+candidate_id),
    findJobById: (job_id) => axiosInstance.get("jobadvert-by-id/"+job_id),
    addJob: (data) => axiosInstance.post("jobadvert/",data),
    findJobsByRecruiter: (recruiter_id) => axiosInstance.get("jobadvert-by-recruiterid/"+recruiter_id),

}



export default jobService;
