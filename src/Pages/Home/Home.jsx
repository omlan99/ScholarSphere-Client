import React from "react";
import { Helmet } from "react-helmet-async";
import ReviewCard from "../../Component/ReviewCard";
import Apply from "./Apply";
import BannerSlider from "./BannerSlider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ScholarSphere | Home</title>
      </Helmet>
      <BannerSlider></BannerSlider>
        <Apply></Apply>
     
    </div>
  );
};

export default Home;
