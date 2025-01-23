import React, { useEffect, useState } from 'react';
import useCommonAxios from '../../Hook/useCommonAxios';
import { FcViewDetails } from 'react-icons/fc';
import { FaRegEdit } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

const ManageScholarship = () => {
    const [scholarships, setScholarships] = useState([])
    const axiosCommon = useCommonAxios()
    useEffect(() => {
      axiosCommon.get('/scholarship')
      .then(res => {
        setScholarships(res.data)
        console.log(scholarships)
      })
    }, [])
   
    return (
        <div>
              <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
                {/* •	Scholarship name,
•	,
•	Subject Category,
•	Degree,
•	Application Fees,
•	Three-button Details, Edit, Cancel 
 */}
              <th></th>
              <th>University Name</th>
              <th>Subject</th>
              <th>Subject Category</th>
              <th>Degree</th>
              <th>Application Fees</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              scholarships.map((scholarship, index) =>   <tr key={index}>
                <th>{index+1}</th>
                <td>{scholarship.university_name}</td>
                <td>{scholarship.subject_name
                }</td>
                <td>{scholarship.scholarship_category}</td>
                <td></td>
                <td>{scholarship.application_fees}</td>
                <td><FcViewDetails></FcViewDetails></td>
                <td><FaRegEdit></FaRegEdit></td>
                <td><TiDelete /></td>
              </tr>)
            }
           
          </tbody>
        </table>
      </div>    
        </div>
    );
};

export default ManageScholarship;