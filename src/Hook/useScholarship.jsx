import { useEffect, useState } from "react";
import useCommonAxios from "./useCommonAxios";
import useAuth from "./useAuth";


const useScholarship = (find) => {
    const [scholarships, setScholarships] = useState([])
    const axiosCommon = useCommonAxios() 
    const [loading, setLoading] = useState(true)
    console.log(find)
    useEffect(()=>{
      
           if(find){
            axiosCommon.get(`/scholarship?search=${find}`)
            .then(res => {
                setScholarships(res.data)
                setLoading(false)
            })
           }
           axiosCommon.get('/scholarship')
           .then(res => {
            console.log(res.data)
           })
         
          
                
    }, [find])
    return [scholarships, loading]
};

export default useScholarship;