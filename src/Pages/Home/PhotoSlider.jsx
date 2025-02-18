import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const PhotoSlider = () => {
  return (
    <div className="mb-[100px]">
        <h2 className="font-bold text-4xl text-center pb-10">Our associate college</h2>
      <Swiper
      slidesPerView={3}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
        <div className="h-[100px] w-[100px]">
            <img
        
              src="https://i.ibb.co.com/Lnhyy61/Massachusetts-Institute-of-Technology-Logo-wine.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-[100px] w-[100px]">
            <img
           
              src="https://i.ibb.co.com/Wg2Th19/oxford-university-logo-1200x700.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[100px] w-[100px]">
            <img  src="https://i.ibb.co.com/m9hsdqN/512px-Utoronto-coa-svg.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[100px] w-[100px]">
            <img  src="https://i.ibb.co.com/mGJC0JK/Harvard-University-logo-512.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[100px] w-[100px]">
            <img  src="https://i.ibb.co.com/3vr9mc5/heidelberg-university-1072.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[100px] w-[100px]">
            <img  src="https://i.ibb.co.com/kGX7Hrc/stanford-medicine-logo-500x281.webp" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PhotoSlider;
