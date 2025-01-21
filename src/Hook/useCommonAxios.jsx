import axios from "axios";

const axiosCommon = axios.create({
    baseURL : "http://localhost:5000",

})

const useCommonAxios = () => {
    return axiosCommon
};

export default useCommonAxios;