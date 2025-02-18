import React, { useEffect, useState } from "react";
import useCommonAxios from "../../Hook/useCommonAxios";
import useAuth from "../../Hook/useAuth";
import SectionTitle from "../../Component/SectionTitle";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const MyProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState([]);
  const axiosSecure = useAxiosSecure()
  
  const axiosCommon = useCommonAxios();
  useEffect(() => {
    axiosSecure.get(`/users/${user?.email}`).then((res) => {
      console.log(res.data);
      setProfile(res.data);
    });
  }, [user?.email, axiosSecure]);

  return (
    <div className="">
      <SectionTitle heading={"My Profile"}></SectionTitle>
     <div className="flex justify-center items-center ">
     <div className="flex gap-16 my-5 p-5 rounded-xl bg-[#111e22] text-white w-1/2">
        <div className="w-[80px] ">
          <img src={profile.image} alt="" />
        </div>
        <div>
          <p className="py-2">Name : {profile.name} </p>
          <p className="py-2"> Email : {profile.email}</p>
          <p className="py-2"> Role : {profile.role ? <span>{profile.role}</span> : <></>}</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default MyProfile;
