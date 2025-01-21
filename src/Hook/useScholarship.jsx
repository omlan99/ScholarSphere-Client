import { useEffect, useState } from "react";
import useCommonAxios from "./useCommonAxios";


const useScholarship = () => {
    const [scholarships, setScholarships] = useState([])
    const axiosCommon = useCommonAxios() 
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            axiosCommon.get('/scholarship')
            .then(res => {
                setScholarships(res.data)
                setLoading(false)
               })
          }, 1000);
            
                
    }, [])
    return [scholarships, loading]
};

export default useScholarship;