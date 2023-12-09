import React from "react";
import "./eventLocation.css";
import bg_top from "./../../assets/eventLocation/bg_top.png";
import syphax from "./../../assets/eventLocation/syphax.png";
import shadow from "./../../assets/eventLocation/shadow.png";
import { useInView } from "react-intersection-observer";

const EventLocation = () => {
  const { ref, inView } = useInView();

  return (
    <section className="flex  flex-col  justify-center items-center section relative ">
      <div className="h-full overflow-hidden  flex flex-col items-center justify-center">
        <div className={` ${inView ? "text-center" : "hidden"} mt-4 lg:mt-0`}>
          <h3 className="text-decoration-1 text-base ">Event Location</h3>
          <h1 className="text-decoration-2 text-3xl">Syphax Hotel</h1>
        </div>
        <div ref={ref}></div>
        <div className={` ${inView ? "logo-div" : "hidden"}`}>
          <img
            className="logo"
            src={syphax}
            alt="SYPHAX"
            style={{ zIndex: 1 }}
          />
        </div>
        <div className={` ${inView ? "box" : "hidden"}`} style={{ zIndex: 2 }}>
          <div className="bg-image">
            <img src={shadow} className="w-full h-full" alt="" />
          </div>
          <div className="box-text">
            Syphax Hotel offers a comfortable and welcoming retreat for
            visitors. As a 3-star establishment, it combines affordability with
            a range of amenities. It is an ideal choice for those seeking a
            modest yet comfortable stay in a picturesque Algerian setting.
          </div>
        </div>
        <div className={` ${inView ? "btn-div" : "hidden"} `}>
          <a
            className="btn"
            href="https://maps.app.goo.gl/YidR6wdCWdRA9k5s8"
            target="_blank"
          >
            <span className="text-decoration relative z-20">View location</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventLocation;
