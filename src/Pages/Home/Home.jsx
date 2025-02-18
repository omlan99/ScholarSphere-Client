import React from "react";
import { Helmet } from "react-helmet-async";
import ReviewCard from "../../Component/ReviewCard";
import Apply from "./Apply";
import BannerSlider from "./BannerSlider";
import Contact from "./Contact";
import PhotoSlider from "./PhotoSlider";
import Card from "../../Component/Card";
import useScholarship from "../../Hook/useScholarship";
import { Link } from "react-router-dom";

const Home = () => {
  const [scholarships] = useScholarship();
  const slicedScholarship = scholarships.slice(0, 3);
  console.log(slicedScholarship);
  return (
    <div>
      <Helmet>
        <title>ScholarSphere | Home</title>
      </Helmet>
      <BannerSlider></BannerSlider>
      <div className="mb-[100px]">
        <h2 className="font-bold text-4xl text-center py-4">Scholarships</h2>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-4 my-5 p-5">
          {slicedScholarship.map((scholarship, idx) => (
            <Card scholarship={scholarship} key={idx}></Card>
          ))}
        </div>
        <div className="py-4 flex justify-center">
          <Link className="btn btn-primary btn-wide" to={"/AllScholarship"}>
            Vew All
          </Link>
        </div>
      </div>
      <Apply></Apply>
      <div className="mb-[100px]">
        <div className="stats shadow w-full">
          <div className="stat place-items-center">
            <div className="stat-title">Applicants</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Scholarship</div>
            <div className="stat-value ">4,200</div>
            <div className="stat-desc">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">University</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <PhotoSlider></PhotoSlider>
      <Contact></Contact>
    </div>
  );
};

export default Home;
