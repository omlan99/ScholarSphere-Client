import React, { useEffect, useState } from "react";
import useCommonAxios from "../../Hook/useCommonAxios";
import { TiUserDelete } from "react-icons/ti";
import useUser from "../../Hook/useUser";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, refetch] = useUser();

  const handleDeleteUser = (id) => {
    if(users.length > 0){
      axiosSecure.delete(`/users/${id}`).then((res) => {
        refetch();
      });
    }
  };
  const handleRole = ( e, id) => {
    console.log( e.target.value , id)
    const updateData = {
      role : e.target.value
    }
  
    axiosSecure.patch(`/users/role/${id}`, updateData)
    .then(res => console.log(res.data))

  }
  return (
    <div>
      <div className="w-full flex justify-end pr-20">
        <select defaultValue={''} className="select select-bordered">
          <option disabled value={''}>
            Sort By
          </option>
          <option>Adnin</option>
          <option>Moderator</option>
          <option>User</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.length>0 ? (users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className=" w-[20px]">
                  <select className="" defaultValue={""} onChange={(e) => handleRole(e, user._id)}>
                    <option disabled value={""}>
                      {user.role ? user.role : "user"}
                    </option>
                    <option>Moderator</option>
                    <option>Admin</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn"
                  >
                    <TiUserDelete className="text-2xl  mx-auto" />
                  </button>
                </td>
              </tr>
            ))) : <></>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
