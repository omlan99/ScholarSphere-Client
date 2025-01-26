import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import SectionTitle from "../../../Component/SectionTitle";
import useCommonAxios from "../../../Hook/useCommonAxios";
import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth";
import Swal from "sweetalert2";

const MyReview = () => {
  const { user } = useAuth();
  const [myReviews, setMyReviews] = useState([]);

  const axiosCommon = useCommonAxios();
  useEffect(() => {
    if (user?.email) {
      axiosCommon.get(`/reviews?email=${user?.email}`).then((res) => {
        console.log(res.data);
        setMyReviews(res.data);
      });
    }
  }, [user?.email]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete your review!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your review has been deleted.",
          icon: "success",
        });
        axiosCommon.delete(`/reviews/${id}`).then((res) => {
          console.log(res.data);
          setMyReviews(
            myReviews.filter((review) => review._id !== id)
          );
        });
      }
    });
  
  };
  return (
    <div>
      <SectionTitle heading={"My Reviews"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Scholarship name </th>
              <th>university name</th>
              <th>Review comments</th>
              <th>Review date</th>
              <th>Edit</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myReviews.map((myReviews, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{myReviews.university_name}</td>
                <td>{myReviews.scholarship_name}</td>
                <td>{myReviews.review_comment}</td>
           
                <td>{myReviews.review_date}</td>
                <td>
                  <button>

                  <FaRegEdit className="text-2xl"></FaRegEdit>
                  </button>
                </td>
                <td>
                  <button 
                    onClick={() => handleDelete(myReviews._id)}>

                  <TiDelete className="text-2xl"/>
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

export default MyReview;
