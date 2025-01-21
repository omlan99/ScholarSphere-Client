import { useEffect, useState } from "react";
import useCommonAxios from "./useCommonAxios";


const useScholarship = (search) => {
    const [scholarships, setScholarships] = useState([])
    const axiosCommon = useCommonAxios() 
    const [loading, setLoading] = useState(true)
    console.log(search)
    useEffect(()=>{
        setTimeout(() => {
            axiosCommon.get(`/scholarship?search=${search}`)
            .then(res => {
                setScholarships(res.data)
                setLoading(false)
               })
          }, 1000);
            
                
    }, [search])
    return [scholarships, loading]
};

export default useScholarship;