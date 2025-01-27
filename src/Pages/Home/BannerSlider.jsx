import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image1 from "../../assets/istockphoto-1988193988-612x612.jpg";
import image2 from "../../assets/istockphoto-2166845739-612x612.jpg";
import image3 from "../../assets/istockphoto-2163001897-612x612.jpg";

const BannerSlider = () => {
  return (
    <>
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
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className="w-full" src={image3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
