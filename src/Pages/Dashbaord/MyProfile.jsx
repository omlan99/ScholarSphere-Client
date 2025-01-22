import React, { useEffect, useState } from "react";
import useCommonAxios from "../../Hook/useCommonAxios";
import useAuth from "../../Hook/useAuth";
import SectionTitle from "../../Component/SectionTitle";

const MyProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({});

  const email = user?.email;
  const axiosCommon = useCommonAxios();
  useEffect(() => {
    axiosCommon.get(`/users?email=${email}`).then((res) => {
      console.log(res.data);
      setProfile(res.data);
    });
  }, [email]);
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
          {profile.role ? <p>{profile.role}</p> : <></>}
        </div>  
      </div>
    </div>
  );
};

export default MyProfile;
