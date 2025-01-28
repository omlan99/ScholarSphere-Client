import axios from "axios";

const axiosCommon = axios.create({
    // baseURL : "https://scholar-sphere-server-sigma.vercel.app/",
    baseURL : "http://localhost:5000",

})

const useCommonAxios = () => {
    return axiosCommon  
};

export default useCommonAxios;