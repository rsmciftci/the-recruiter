import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
});


const companyService = {
    retunAllCompanies: () => axiosInstance.get("all-companies/"),
    saveCompany: (company) => axiosInstance.post("company/", company),
   
}

export default companyService;
