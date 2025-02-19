import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image1 from "../../assets/49805.jpg";
import image2 from "../../assets/college-mates-studying-together.jpg";
import image3 from "../../assets/2147657190.jpg";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  return (
    <>
      <div className="mt-[70px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="h-[440px]">
          <img className="w-full h-full object-cover" src={image1} alt="" />
          <div className="absolute bg-black bg-opacity-50  h-full z-20  inset-0 flex flex-col  justify-center items-center">
              <p className="  text-white text-center text-4xl font-bold max-w-[800px] p-5 ">
                {" "}
                Turn Your Dreams into Reality! Apply for Scholarships Today{" "}
              </p>
              <Link to={""} href="" className="btn btn-primary">View Scholarship</Link>
            </div>  
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-[440px]">
          <img className="w-full h-full object-cover" src={image2} alt="" />
          <div className="absolute bg-black bg-opacity-50  h-full z-20  inset-0 flex flex-col  justify-center items-center">
              <p className="  text-white text-center text-4xl font-bold max-w-[800px] p-5 ">
                {" "}
                Hassle-Free Applications – Get Started in Minutes!{" "}
              </p>
              <Link to={""} href="" className="btn btn-primary">View Scholarship</Link>
            </div>  
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-[440px]">
          <img  className="w-full h-full object-cover" src={image3} alt="" />
          <div className="absolute bg-black bg-opacity-50  h-full z-20  inset-0 flex flex-col  justify-center items-center">
              <p className="  text-white text-center text-4xl font-bold max-w-[800px] p-5 ">
                {" "}
                Unlock Global Education & Career Growth with Scholarships{" "}
              </p>
              <Link to={""} href="" className="btn btn-primary">View Scholarship</Link>
            </div>  
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default BannerSlider;
