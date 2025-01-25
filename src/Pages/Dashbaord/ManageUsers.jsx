import React, { useEffect, useState } from "react";
import useCommonAxios from "../../Hook/useCommonAxios";
import { TiUserDelete } from "react-icons/ti";
import useUser from "../../Hook/useUser";

const ManageUsers = () => {
  const axiosCommon = useCommonAxios();
  const [users, refetch] = useUser();

  const handleDeleteUser = (id) => {
    axiosCommon.delete(`/users/${id}`).then((res) => {
      refetch();
    });
  };
  return (
    <div>
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
            {users.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className=" w-[20px]">
                  <select className="" defaultValue={""}>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
