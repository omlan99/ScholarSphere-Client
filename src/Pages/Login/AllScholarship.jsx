import React, { useState } from "react";
import SectionTitle from "../../Component/SectionTitle";
import useCommonAxios from "../../Hook/useCommonAxios";
import useScholarship from "../../Hook/useScholarship";
import Card from "../../Component/Card";

const AllScholarship = () => {
    const [search, setSearch] = useState("")
  const [scholarships, loading] = useScholarship(search);
   
  return (
    <div>
      {loading ? (
        <>
          <div className="max-h-screen flex justify-center  mx-auto">
           <div> <progress className="progress w-56"></progress></div>
          </div>
        </>
      ) : (
        <>
          <div >
            <SectionTitle heading={"All Scholarship"}></SectionTitle>

            <div>
              <div>
                <div className="join">
                  <div>
                    <div>
                      <input
                      onChange={(e) => setSearch(e.target.value)}
                        className="input input-bordered join-item"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="indicator">
                    <button className="btn join-item">Search</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10">
                  {scholarships.map((scholarship, idx) => (
                    <Card scholarship={scholarship} key={idx}></Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllScholarship;
