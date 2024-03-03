import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
});


const jobService = {

    findJobsByTitle: (title) => axiosInstance.get("jobadvert-by-title/" + title),
}



export default jobService;
