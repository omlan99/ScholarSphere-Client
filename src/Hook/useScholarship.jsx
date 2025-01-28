import { useEffect, useState } from "react";
import useCommonAxios from "./useCommonAxios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";



const useScholarship = (find) => {
    const {user} = useAuth()
    const axiosCommon = useCommonAxios()  
    // console.log(find)

    const {refetch , data: scholarshipData=[], isLoading } =useQuery({
        queryKey : ['scholarshipData', find, user?.email],
        queryFn : async () =>{
            const res = await axiosCommon.get(`/scholarship?search=${find}&email=${user?.email}`)
                return res.data
                
        },
        enabled: !!find || find === "",
    })

    return [scholarshipData, refetch, isLoading]
};

export default useScholarship;