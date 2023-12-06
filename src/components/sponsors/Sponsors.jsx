import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import sponsor1 from "../../assets/images/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor1.png";
import sponsor3 from "../../assets/images/sponsor1.png";
import sponsor4 from "../../assets/images/sponsor1.png";
import sponsor5 from "../../assets/images/sponsor1.png"; // Add this line
import "./sponsors.css";

function Sponsors() {
  return (
    <div className="sponsors-section section">
      <div className="sponsor-header">
        <p className="special-p">sponsors</p>
        <h2>Our sponsors</h2>
        <p>
          We extend our heartfelt gratitude to our generous sponsors whose
          support fuels innovation and drives the success of InnoByte Hackathon.
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slideToClickedSlide={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        s
        coverflowEffect={{
          rotate: 0,
          stretch: 30,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="sponsorSlider"
      >
        <SwiperSlide>
          <img className="sponsorImg" src={sponsor1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="sponsorImg" src={sponsor2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="sponsorImg" src={sponsor3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="sponsorImg" src={sponsor4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="sponsorImg" src={sponsor5} />
        </SwiperSlide>
        <div id="shadow-right"></div>
        <div id="shadow-left"></div>
      </Swiper>
    </div>
  );
}

export default Sponsors;
