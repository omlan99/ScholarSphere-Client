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
  console.log(profile)
  return (
    <div>
      <SectionTitle heading={"My Profile"}></SectionTitle>
      <div className="flex gap-9 my-5">
        <div className="w-[80px]">
          <img src={profile.image} alt="" />
        </div>
        <div>
          <p>Name : {profile.name} </p>
          <p> Email : {profile.email}</p>
          <p> Role : {profile.role ? <span>{profile.role}</span> : <></>}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
