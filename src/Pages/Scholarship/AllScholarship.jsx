import React, { useState } from "react";
import SectionTitle from "../../Component/SectionTitle";
import useScholarship from "../../Hook/useScholarship";
import Card from "../../Component/Card";
import { FcSearch } from "react-icons/fc";
import { FaArrowDown, FaArrowUp, FaFaceSadCry } from "react-icons/fa6";

const AllScholarship = () => {
  const [search, setSearch] = useState("");
  const [find, setFind] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const [scholarships, isLoading, refetch] = useScholarship(find);
  const handleSearch = () => {
    setFind(search);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // Automatically fetch all data when input is cleared
    if (value === "") {
      setFind(""); // Reset query to fetch all data
    }
  };
  const handleSort = () => {
    setIsAscending(!isAscending);
  };
  const sortedScholarships = [...scholarships].sort((a, b) =>
    isAscending
      ? a.application_deadline.localeCompare(b.application_deadline)
      : b.application_deadline.localeCompare(a.application_deadline)
  );

  return (
    <div className="my-[100px]">
      <div>
        <SectionTitle heading={"All Scholarship"}></SectionTitle>
        <div>
          <div>
            <div className="flex justify-between items-center gap-5 my-10  px-5">
              <button
              className="btn btn-primary"
                onClick={handleSort}
              >
                {isAscending ? (
                  <>
                   Sort by Fees
                    <FaArrowDown></FaArrowDown>
                  </>
                ) : (
                  <>
                    Sort by Fees
                    <FaArrowUp></FaArrowUp>{" "}
                  </>
                )}
              </button>
              <div className="flex gap-2 w-full justify-end">
                <input
                  value={search}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Search for university, degree, Subject"
                  className="input w-full max-w-sm border border-black "
                />
                <button onClick={handleSearch} className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div>
            {scholarships.length > 0 ? (
              <>
                {" "}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10 p-5">
                  {sortedScholarships.map((scholarship, idx) => (
                    <Card scholarship={scholarship} key={idx}></Card>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="bg-gray-400 min-h-screen flex justify-center items-center text-center">
                  <div>
                    <FaFaceSadCry className="mx-auto text-5xl text-yellow-300"></FaFaceSadCry>
                    <p className="text-2xl font-semibold py-3">
                      Sorry we did not find any result
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllScholarship;
