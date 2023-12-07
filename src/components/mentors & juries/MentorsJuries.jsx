import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import mentor1 from "../../assets/images/me.jpg";
import mentor2 from "../../assets/images/me.jpg";
import mentor3 from "../../assets/images/me.jpg";
import mentor4 from "../../assets/images/me.jpg";
import mentor5 from "../../assets/images/me.jpg"; // Add this line
import "./mentorsJuries.css";

function MentorsJuries() {
  return (
    <div className="mentors-section section">
      <div className="mentor-header">
        <p className="special-p">Mentors & Juries</p>
        <h2>Our Mentors & Juries</h2>
        <p>A stellar lineup of mentors and juries, industry pianners committes to guiding and evaluating <br /> the ingenious solutions created during InnoByte Hackathon.</p>
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
          stretch: -60,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mentorSlider"
      >
        <SwiperSlide className="mentors">
          <img className="mentorImg" src={mentor1} />
          <div className="mentor-information">
            <p className="mentor-name">Rayane Boucheraine</p>
            <ul>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mentors">
          <img className="mentorImg" src={mentor2} />
          <div className="mentor-information">
            <p className="mentor-name">Rayane Boucheraine</p>
            <ul>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mentors">
          <img className="mentorImg" src={mentor3} />
          <div className="mentor-information">
            <p className="mentor-name">Rayane Boucheraine</p>
            <ul>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mentors">
          <img className="mentorImg" src={mentor4} />
          <div className="mentor-information">
            <p className="mentor-name">Rayane Boucheraine</p>
            <ul>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mentors">
          <img className="mentorImg" src={mentor5} />
          <div className="mentor-information">
            <p className="mentor-name">Rayane Boucheraine</p>
            <ul>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
              <li>Kda Mna Mlhih</li>
            </ul>
          </div>
        </SwiperSlide>
        <div id="shadow-right"></div>
        <div id="shadow-left"></div>
      </Swiper>
    </div>
  );
}

export default MentorsJuries;
