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
import Review from "./Review";

const Home = () => {
  const [scholarships] = useScholarship();
  const slicedScholarship = scholarships.slice(0, 3);

  return (
    <div>
      <Helmet>
        <title>ScholarSphere | Home</title>
      </Helmet>
      <BannerSlider></BannerSlider>
      <div id="scholarship">
      <div className="pt-[100px]" >
        <h2 className="font-bold text-4xl text-center pb-10">Scholarships</h2>
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
      </div>
      <PhotoSlider ></PhotoSlider>
      <Apply></Apply>
      <Stats></Stats>
      <Contact></Contact>
      <Review></Review>
      <Faq></Faq>
    </div>
  );
};

export default Home;
