import React, { useEffect, useState } from "react";
import useCommonAxios from "../../Hook/useCommonAxios";
import { TiUserDelete } from "react-icons/ti";
import useUser from "../../Hook/useUser";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [users, refetch] = useUser();
  const [filteredUsers, setFilteredUsers] = useState([])
  const handleDeleteUser = (id) => {
    if(users.length > 0){
      axiosSecure.delete(`/users/${id}`).then((res) => {
        refetch()
      });
    }
  };
  const handleRole = ( e, id) => {
    console.log( e.target.value , id)
     Swal.fire({
          title: "Are you sure?",
          text: `You want to make him/her ${e.target.value}!`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: `Yes, make ${e.target.value} !`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: `You updated the role`,
              text: `You made him/her ${e.target.value}`,
              icon: "success",
            });
            const updateData = {
              role : e.target.value
            }
          
            axiosSecure.patch(`/users/role/${id}`, updateData)
            .then(res => console.log(res.data))
        
           
          }
        });
   
  }
  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);
  const handleFilter = (selectedRole) =>{
    console.log(selectedRole)
      if(!selectedRole){
        setFilteredUsers(users)
      }
      const filtered = users.filter(user => user.role === selectedRole)
      setFilteredUsers(filtered)
      

  }
  return (
    <div>
      <div className="w-full flex justify-end pr-20">
        <select defaultValue={''} className="select select-bordered" onChange={(e) =>handleFilter(e.target.value)}>
          <option disabled value={''}>
            Filter By Role
          </option>
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="user">User</option>
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
            {filteredUsers.length>0 ? (filteredUsers.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className=" w-[20px]">
                  <select defaultValue={user.role} onChange={(e) => handleRole(e, user._id)}>
                  
                  
                    <option value={'user'}>User</option>
                    <option value={'moderator'}>Moderator</option>
                    <option value={'admin'}>Admin</option>
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
