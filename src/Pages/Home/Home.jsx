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
import Faq from "./Faq";
import Stats from "./Stats";

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
      <Stats></Stats>
      <PhotoSlider></PhotoSlider>
      <Contact></Contact>
      <Faq></Faq>
    </div>
  );
};

export default Home;
