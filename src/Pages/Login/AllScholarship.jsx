import React, { useState } from "react";
import SectionTitle from "../../Component/SectionTitle";
import useCommonAxios from "../../Hook/useCommonAxios";
import useScholarship from "../../Hook/useScholarship";
import Card from "../../Component/Card";

const AllScholarship = () => {
  const [search, setSearch] = useState("");
  const [find, setFind] = useState("");
  const [scholarships, loading] = useScholarship(find);
  const handleSearch = () => {
    setFind(search);
    console.log(search);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Automatically fetch all data when input is cleared
    if (value === "") {
      setFind(""); // Reset query to fetch all data
    }
  };
  return (
    <div>
      {loading ? (
        <>
          <div className="max-h-screen flex justify-center  mx-auto">
            <div>
              {" "}
              <progress className="progress w-56"></progress>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <SectionTitle heading={"All Scholarship"}></SectionTitle>

            <div>
              <div>
                <div className="flex gap-5 my-10 justify-center px-5">
                  <input
                    value={search}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Search for university, degree, Subject"
                    className="input w-full max-w-2xl border-2 border-indigo-100"
                  />
                  <button onClick={handleSearch} className="btn">
                    Search
                  </button>
                </div>
              </div>
              <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10 p-5">
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
