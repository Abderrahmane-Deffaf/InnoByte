import React, { useState } from "react";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";
import btnD1 from "../../assets/eventAgenda/btn-day1.png";
import btnD2Right from "../../assets/eventAgenda/btn-day2-right.png";
import btnD2Left from "../../assets/eventAgenda/btn-day2-left.png";
import btnD3 from "../../assets/eventAgenda/btn-day3.png";
import "./eventAgenda.css";
function EventAgenda() {
  const [BtnR, setBtnR] = useState(btnD2Right);
  const [BtnL, setBtnL] = useState("");
  const [slide, setSlide] = useState("Day1");
  const [slideDay, setSlideDay] = useState("Thursday");

  const handleSwipright = (e) => {
    if (
      e.target.src ===
      "https://innobyte.vercel.app/src/assets/eventAgenda/btn-day2-right-jxYolSKC.png"
    ) {
      setBtnR(btnD3);
      setBtnL(btnD1);
      setSlide("Day2");
      setSlideDay("Friday");
    } else if (
      e.target.src ===
      "https://innobyte.vercel.app/src/assets/eventAgenda/btn-day3.png"
    ) {
      setBtnR("");
      setBtnL(btnD2Left);
      setSlide("Day3");
      setSlideDay("Saturday");
    }
  };

  const handleSwipleft = (e) => {
    if (
      e.target.src ===
      "https://innobyte.vercel.app/src/assets/eventAgenda/btn-day2-left.png"
    ) {
      setBtnR(btnD3);
      setBtnL(btnD1);
      setSlide("Day2");
      setSlideDay("Friday");
    } else if (
      e.target.src ===
      "https://innobyte.vercel.app/src/assets/eventAgenda/btn-day1.png"
    ) {
      setBtnR(btnD2Right);
      setBtnL("");
      setSlide("Day1");
      setSlideDay("Thursday");
    }
  };

  return (
    <>
      <section className="section overflow-hidden flex justify-center flex-col items-center h-screen relative section">
        <div className="text-center pt-5">
          <h3 className="text-decoration-1 sm:text-xm">Event Agenda</h3>
          <h1 className="text-decoration-4 mb-5 sm:text-sm">
            Agenda Highlights
          </h1>
        </div>
        <div className="container-slider relative">
          {slideDay !== "Friday" && (
            <div className="container-bg absolute z-0 ">{slideDay}</div>
          )}
          {slideDay === "Friday" && (
            <div className="container-bg friday absolute spacing z-0 ">
              {slideDay}
            </div>
          )}
          <div
            className="aBtn btn-left absolute sm:text-sm"
            onClick={(e) => {
              return handleSwipleft(e);
            }}
          >
            <img src={BtnL} className="btnImg" />
          </div>

          <div className="slide">
            {slide === "Day1" && <Day1 />}
            {slide === "Day2" && <Day2 />}
            {slide === "Day3" && <Day3 />}
          </div>

          <div
            className="aBtn btn-right absolute"
            onClick={(e) => {
              console.log(e.target.src) ; 

              return handleSwipright(e);
            }}
          >
            <img src={BtnR} className="btnImg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default EventAgenda;
