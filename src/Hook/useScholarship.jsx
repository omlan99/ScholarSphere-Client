import { useEffect, useState } from "react";
import useCommonAxios from "./useCommonAxios";


const useScholarship = (find) => {
    const [scholarships, setScholarships] = useState([])
    const axiosCommon = useCommonAxios() 
    const [loading, setLoading] = useState(true)
    console.log(find)
    useEffect(()=>{
        setTimeout(() => {
            axiosCommon.get(`/scholarship?search=${find}`)
            .then(res => {
                setScholarships(res.data)
                setLoading(false)
               })
          }, 1000);
            
                
    }, [find])
    return [scholarships, loading]
};

export default useScholarship;