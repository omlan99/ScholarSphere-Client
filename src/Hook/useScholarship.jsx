import { useEffect, useState } from "react";
import useCommonAxios from "./useCommonAxios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { set } from "react-hook-form";


const useScholarship = (find) => {
    const axiosCommon = useCommonAxios()  
    console.log(find)

    const {refetch , data: scholarshipData=[] } =useQuery({
        queryKey : ['scholarshipData', find],
        queryFn : async () =>{
            const res = await axiosCommon.get(`/scholarship?search=${find}`)
                return res.data
        },
        enabled: !!find || find === "",
    })

    return [scholarshipData, refetch]
};

export default useScholarship;