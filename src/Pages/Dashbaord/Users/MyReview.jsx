import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import SectionTitle from "../../../Component/SectionTitle";

const MyReview = () => {
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
            {/* {
                          scholarships.map((scholarship, index) =>   <tr key={index}>
                            <th>{index+1}</th>
                            <td>{scholarship.university_name}</td>
                            <td>{scholarship.subject_name
                            }</td>
                            <td>{scholarship.scholarship_category}</td>
                            <td></td>
                            <td>{scholarship.application_fees}</td>
                            <td><FcViewDetails className='text-2xl'></FcViewDetails></td>
                            <td><FaRegEdit className='text-2xl'></FaRegEdit></td>
                            <td><TiDelete className='text-2xl' onClick={() => handleDelete(scholarship._id)} /></td>
                          </tr>)
                        } */}

            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <FaRegEdit className="text-2xl  mx-auto"></FaRegEdit>
              </td>
              <td>
                <TiDelete className="text-2xl  mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
