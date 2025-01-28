import axios from "axios";

const axiosCommon = axios.create({
    baseURL : "https://scholar-sphere-server-sigma.vercel.app/",

})

const useCommonAxios = () => {
    return axiosCommon  
};

export default useCommonAxios;