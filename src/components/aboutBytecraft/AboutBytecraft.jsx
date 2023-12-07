import React from "react";
import "./aboutBytecraft.css";
import bg_top from "./../../assets/eventLocation/bg_top.png";
import pc from "./../../assets/aboutByte/pc.png";
import logo from "../../assets/aboutByte/logo.png";
import { useInView } from "react-intersection-observer";

const AboutBytecraft = () => {

  const { ref, inView } = useInView();
  console.log(inView)

  return (
    <>
      <section className="section overflow-hidden flex justify-center flex-col items-center relative">
        <div ref={ref}>
          <div 
            className={` ${inView ? "text-center" : "hidden"}`}
          >
            <h3 className="text-decoration-3">Bytecraft</h3>
            <h1 className="text-decoration-4">Bytecraft CLub</h1>

          </div>
          <div
            className={` ${inView ? "logo-div" : "hidden"}`}
          >
            <img
              className={` ${inView ? "logo" : "hidden"}`}
              src={logo}
              alt="SYPHAX"
              style={{ zIndex: 1 }}
            />
          </div>
          <div
            className={` ${inView ? "box1" : "hidden"}`}
          >
            <div className={` ${inView ? "box1-text" : "hidden"}`}>
              established in 2021 by Estin students, is your gateway to a dynamic
              tech community. We've been the driving force behind amazing events
              like Chesstin, Ideatech, design camp, GameJam, ByteFestival, and
              much more to come in the future. Mission: Our goal is to create a
              space where diverse individuals can explore, learn, and contribute
              to the ever-evolving world of technology.
            </div>
          </div>
          <div
           className={` ${inView ? "social_media" : "hidden"}`}
          >
            <a href="https://web.facebook.com/ByteCraftEstin/" className="link">
              Facebook
            </a>
            <a href="https://www.instagram.com/bytecraft.estin/" className="link">
              Instgram
            </a>
            <a
              href="https://www.linkedin.com/company/bytecraft-club/posts/"
              className="link"
            >
              linkedin
            </a>
          </div>
          <img
            className="absolute blur-sm left-0 z-0  bottom-[-150px] w-[350px] h-[400px]"
            src={bg_top}
            alt="background"
          />
          <img
            style={{
              filter: "drop-shadow(0px 0px 200px rgba(255, 255, 255, 0.40))",
            }}
            className="absolute -right-[30px] md:right-[20px] -top-[90px] md:top-[-40px] w-[140px] md:w-[200px] h-[140px] md:h-[200px]"
            src={pc}
            alt="pc"
          />
        </div>
      </section>
    </>
  );
};

export default AboutBytecraft;
