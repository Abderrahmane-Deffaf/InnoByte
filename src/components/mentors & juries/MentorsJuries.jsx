import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import mentor2 from "../../assets/images/yacine.png";
import mentor3 from "../../assets/images/said.png"; 
import mentor1 from "../../assets/images/bedla.png";
import mentor4 from "../../assets/images/oussama.png";
import mentor5 from "../../assets/images/berriche.png";
import mentor6 from "../../assets/images/imad.png"; 
import "./mentorsJuries.css";

// https://docs.google.com/spreadsheets/d/1bEzt9jdCh7PHUCByIysUXZVqZi4sA7aNMvwBpKm_QNI/edit#gid=0
function MentorsJuries() {
  return (
    <div className="mentors-section section">
      <div className="mentor-header">
        <p className="special-p">Mentors</p>
        <h2>Our Mentors</h2>
        <p>
          A stellar lineup of mentors and juries, industry pianners committes to
          guiding and evaluating the ingenious solutions created during
          InnoByte Hackathon.
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
          stretch: -60,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mentorSlider"
      >
        <SwiperSlide className="mentors">
          <img loading="lazy" alt="moussaab bedla" className="mentorImg " src={mentor1} />
          <div className="mentor-information">
            <p className="mentor-name">mousaab badla</p>
            <ul className="text-center">
              <li>Mousaab Badla</li>
              <li>Computer Science student</li>
              <li>Gdg Algiers development co-manager</li>
              <li>Full-stack web and mobile developer</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mentors">
          <img loading="lazy" alt="ahmed yacine bouchouareb" className="mentorImg" src={mentor2} />
          <div className="mentor-information">
            <p className="mentor-name">ahmed yacine bouchouareb</p>
            <ul className="text-center">
              <li>Ahmed Yacine Bouchouareb</li>
              <li>
                Final year artificial intelligence & data science student at
                ESTIN BEJAIA
              </li>
              <li>Mobile & Web developer</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mentors">
          <img loading="lazy" alt="said drai" className="mentorImg" src={mentor3} />
          <div className="mentor-information">
            <p className="mentor-name">said drai</p>
            <ul className="text-center">
              <li>Said Drai</li>
              <li>Community and incubation Manager at Itihad group</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mentors">
          <img loading="lazy" alt="oussama mekhaldi" className="mentorImg" src={mentor4} />
          <div className="mentor-information">
            <p className="mentor-name">oussama mekhaldi</p>
            <ul className="text-center">
              <li>Oussama Mekhaldi</li>
              <li>3rd year CS student</li>
              <li>UIUX Designer at Maystro Delivery</li>
              <li>Head of Design at Microclub</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mentors">
          <img loading="lazy" alt="aymen berriche" className="mentorImg" src={mentor5} />
          <div className="mentor-information">
            <p className="mentor-name">Aymen Berriche</p>
            <ul className=" text-center">
              <li>Aymen Berriche</li>
              <li>Final year student at ESI</li>
              <li>GitHub Campus Expert</li>
              <li>AI Research Intern at New York University of Abu Dhabi</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mentors">
          <img loading="lazy" alt="imad eddine hamda" className="mentorImg" src={mentor6} />
          <div className="mentor-information">
            <p className="mentor-name">Imad Eddine hamda</p>
            <ul className=" text-center">
              <li>Imad Eddine Hamda</li>
              <li>4th-year computer science student at USTHB</li>
              <li>UI/UX manager at CSE</li>
              <li>Product designer at Factory Degitale</li>
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
