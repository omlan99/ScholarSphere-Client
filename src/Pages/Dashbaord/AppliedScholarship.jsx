import React from 'react';

const AppliedScholarship = () => {
    return (
        <div>
               <SectionTitle heading={"My Reviews"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Applicant Photo </th>
              <th>Applicant Name</th>
              <th>Applied for</th>
              <th>Application Status</th>
              <th>Detalis</th>
              <th>Feedback</th>
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
                <FaRegEdit className="text-2xl"></FaRegEdit>
              </td>
              <td>
                <TiDelete className="text-2xl" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AppliedScholarship;