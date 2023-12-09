import React from "react";
import "./aboutBytecraft.css";
import bg_top from "./../../assets/eventLocation/bg_top.png";
import pc from "./../../assets/aboutByte/pc.png";
import logo from "../../assets/aboutByte/logo.png";
import { useInView } from "react-intersection-observer";

const AboutBytecraft = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <section className="section overflow-hidden  flex justify-center flex-col items-center relative ">
        <div className="min-h-full  flex flex-col justify-center">
          <div
            className={` ${inView ? "text-center" : "hidden"} relative z-10 `}
          >
            <h3 className="text-decoration-3">Bytecraft</h3>
            <h1 className="text-decoration-4">Bytecraft CLub</h1>
          </div>

          <div ref={ref}></div>
          <div className={` ${inView ? "logo-div" : "hidden"}`}>
            <img
              className={` ${
                inView ? "logo" : "hidden"
              } lg:w-[400px] lg:h-[400px] w-[150px] h-[150px]`}
              src={logo}
              alt="SYPHAX"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className={` ${inView ? "box1" : "hidden"}`}>
            <div
              className={` ${
                inView ? "box1-text" : "hidden"
              } flex items-center justify-center`}
            >
              <p className="max-w-xs lg:max-w-full text-center ">
                Established in 2021 by Estin students, is your gateway to a
                dynamic tech community. We've been the driving force behind
                amazing events like Chesstin, Ideatech, design camp, Press
                Start, ByteFestival, and much more to come in the future. Our
                goal is to create a space where diverse individuals can explore,
                learn, and contribute to the ever-evolving world of technology.
              </p>
            </div>
          </div>
          <div
            className={` ${
              inView ? "social_media" : "hidden"
            } flex items-center lg:justify-between justify-center px-2 flex-wrap  gap-5 `}
          >
            <a href="https://web.facebook.com/ByteCraftEstin/" className="link">
              Facebook
            </a>
            <a
              href="https://www.instagram.com/bytecraft.estin/"
              className="link"
            >
              Instagram
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

