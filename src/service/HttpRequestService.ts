import axios from "axios"
import { SignInData } from "./types";

const url = import.meta.env.VITE_API_URL || "";

axios.interceptors.request.use((config)=>{
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  }, (e)=>{
    return Promise.reject(e);
  })
  
  axios.interceptors.response.use((response)=>{
    return response;
  }, (e)=>{
    if(e.response.status === 401){
      localStorage.removeItem("token");
    }
    return Promise.reject(e);
  }) 

const httpRequestService = {
    signIn: async (data: SignInData) => {
        const res = await axios.post(`${url}/auth/sign-in`, data);
        if(res.status === 200) {
            localStorage.setItem("token", `Bearer ${res.data.token}`);
            return true;
        }
    }
}

const useHttpRequestService = () => httpRequestService;

export { useHttpRequestService }