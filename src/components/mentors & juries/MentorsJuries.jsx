import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { EffectCoverflow } from "swiper/modules";
import "./mentorsJuries.css"
import "swiper/swiper-bundle.css";
import mentor1 from "../../assets/images/me.jpg";
import mentor2 from "../../assets/images/me.jpg";
import mentor3 from "../../assets/images/me.jpg";
import mentor4 from "../../assets/images/me.jpg";
import mentor5 from "../../assets/images/me.jpg"; // Add this line

function MentorsJuries() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [EffectCoverflow],
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        effect: "coverflow",
        speed: 500,
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 10,
          slideShadows: false,
          scale: 0.9,
          depth: 150,
          stretch: -40,
        },
      });

      // Set initial active slide index
      swiper.slideTo(1, false, true); // Set initial slide to the middle one

      // Add active class to initial slide
      const middleSlideIndex = Math.floor(swiper.slides.length / 2);
      swiper.slides[middleSlideIndex].classList.add("swiper-slide-active");

      // Flag to track initial slide change
      let initialSlideChange = true;

      swiper.on("slideChange", () => {
        const activeSlide = swiper.activeIndex;
        const slides = swiper.slides.slice();

        slides.forEach((slide, index) => {
          const slideClasses = slide.classList;
          const isActive = index === activeSlide;

          if (isActive) {
            slideClasses.add("swiper-slide-active");
          } else {
            slideClasses.remove("swiper-slide-active");
          }
        });
      });
    }
  }, [swiperRef]);

  return (
    <div className="mentors-section section">
      <div className="sponsor-header">
        <p className="special-p">Mentors & Juries</p>
        <h2>our mantors & juries</h2>
        <p>
        A stellar lineup of mentors and juries, industry pioneers committed to guiding and evaluating <br /> the ingenious solutions created during InnoByte Hackathon.
        </p>
      </div>
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={mentor1} alt="sponsor1" className="sponsorImg" />
            <div className="mentor-information">
            <p className="mentor-name">Rayane Boucheraine</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
            </div>
          </div>
          <div className="swiper-slide">
            <img src={mentor2} alt="sponsor1" className="sponsorImg" />
            <div className="mentor-information">
              <p className="mentor-name">Rayane Boucheraine</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
            </div>
          </div>
          <div className="swiper-slide">
            <img src={mentor3} alt="sponsor1" className="sponsorImg" />
            <div className="mentor-information">
              <p className="mentor-name">Rayane Boucheraine</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
            </div>
          </div>
          <div className="swiper-slide">
            <img src={mentor4} alt="sponsor1" className="sponsorImg" />
            <div className="mentor-information">
              <p className="mentor-name">Rayane Boucheraine</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
            </div>
          </div>
          <div className="swiper-slide">
            <img src={mentor5} alt="sponsor1" className="sponsorImg" />
            <div className="mentor-information">
              <p className="mentor-name">Rayane Boucheraine</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
              <p>kda mana mlhih</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorsJuries;