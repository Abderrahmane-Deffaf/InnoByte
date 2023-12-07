import React from "react";
import "./eventLocation.css";
import bg_bottom from "./../../assets/eventLocation/bg_bottom.png";
import bg_top from "./../../assets/eventLocation/bg_top.png";
import syphax from "./../../assets/eventLocation/syphax.png";
import shadow from "./../../assets/eventLocation/shadow.png";
import { useInView } from "react-intersection-observer";
const EventLocation = () => {
  const { ref, inView } = useInView();

  return (
    <section className="flex flex-col overflow-hidden justify-center items-center section relative">
      <div ref={ref} className="text-center">
        <h3
          className={`text-decoration-1 ${
            inView ? "text-decoration-one" : ""
          } `}
        >
          Event Location
        </h3>
        <h1
          className={`text-decoration-2 ${inView ? "text-decorationTwo" : ""} `}
        >
          Syphax Hotel
        </h1>
      </div>
      <div className="absolute top-1/2 z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px]">
        <img
          className={`logo ${inView ? "logo_anime" : ""} `}
          src={syphax}
          alt="SYPHAX"
          style={{ zIndex: 1 }}
        />
      </div>
      <div
        className={`box ${inView ? "box_anime" : ""} `}
        style={{ zIndex: 2 }}
      >
        <div className={`bg-image ${inView ? "bg_image_anime" : ""} `}>
          <img src={shadow} className="w-full h-full" alt="" />
        </div>
        <div className={`box-text ${inView ? "box_text_anime" : ""} `}>
          Syphax Hotel offers a comfortable and welcoming retreat for visitors.
          As a 3-star establishment, it combines affordability with a range of
          amenities. It is an ideal choice for those seeking a modest yet
          comfortable stay in a picturesque Algerian setting.
        </div>
      </div>
      <div className={`btn-div ${inView ? "btn_div_anime" : ""} `}>
        <button className="btn">
          <span className="text-decoration relative z-20">View location</span>
        </button>
      </div>

      <img src={bg_top} alt="top" className="top-image-bg " />

      <img src={bg_bottom} alt="button" className="button-image-bg" />
    </section>
  );
};

export default EventLocation;
