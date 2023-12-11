import "./hero.css";
import keyboard from "./keyboard.svg";
import LogoClr from "./LogoClr.svg";
import lines from "./lines.svg";
import pcMonitor from "./pcMonitor.svg";
import CountDown from "./CountDown";
import { useState, useEffect } from "react";
import RegForm from "../registrartion-form/RegForm";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const showHandler = (value) => {
    setShowForm(value);
  };

  const [word, setWord] = useState("innovate");

  return (
    <div className=" hero-bg-gradient  relative section ">
      <RegForm show={showForm} showHandler={showHandler} />
      <div className=" flex flex-col h-full justify-center gap-[7rem]  lg:max-w-[1960px] lg:mx-auto lg:justify-between p-4 relative lg:mt-[10rem]  items-center  lg:flex-row lg:items-center lg:pt-0">
        <div className="title flex lg:basis-[50%] flex-col lg:gap-8 gap-2  select-none cursor-logo   ">
          <h2>innobyte hackathon</h2>
          <h1 className=" text-2xl lg:text-4xl">
            <span >byte</span> by <span>byte</span> we, <br />{" "}
            <span
              className="innovate"
              onMouseEnter={() => {
                setTimeout(() => {
                  setWord("innobyte");
                }, 150);
              }}
              onMouseLeave={() => {
                setWord("innovate");
              }}
            >
              {word}
            </span>{" "}
            the future
          </h1>
          <p className=" font-poppins text-xl text-gray-100  font-light">
            Where Creativity and Innovation Collide in Every Byte.{" "}
          </p>
          <button
            disabled
            className=" opacity-50 w-fit font-goodtimes-rg text-base font-bold py-2 px-3 lg:py-4 lg:px-6 rounded-3xl  bg-gradient-to-r from-mainGreen to-mainBlue transition-all  duration-300 drop-shadow-green "
          >
            Registrartions are closed
          </button>
        </div>
        <div className=" z-10 hero-img group w-[150px]  mx-auto h-[300px] lg:w-[550px] lg:h-[450px] relative transition-all duration-500 ">
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-mainGreen  drop-shadow-green group-hover:drop-shadow-[0px_0px_80px_rgba(26,190,108,0.5)] group-hover:h-[320px] group-hover:w-[320px] lg:group-hover:h-[500px] lg:group-hover:w-[500px] transition-all duration-500 h-[300px] lg:h-[400px] w-[300px] lg:w-[400px] rounded-full"></div>
          <div
            id="pc-monitor"
            className=" group-hover:top-[54%] group-hover:left-[54%] w-[250px] h-[250px] md:w-[300px] md:h-[300px] absolute top-[50%] left-[50%] transition-all duration-500 translate-x-[-50%] translate-y-[-50%]"
          >
            <img src={pcMonitor} alt="" className=" h-full w-full" />
          </div>
          <div
            id="keyboard"
            className=" transition-all duration-500 lg:group-hover:bottom-[-10px]  lg:group-hover:left-[-10px] group-hover:bottom-[-90px] w-[250px] h-[150px] md:w-[300px] absolute left-[-80px] bottom-[-80px] lg:bottom-0 lg:left-0 "
          >
            <img src={keyboard} alt="" className=" h-full w-full" />
          </div>
          <div
            id="logo-clr"
            className=" z-50 lg:z-auto logo-bounce w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-gray-500/40 backdrop-blur-[1px]  rounded-[32px] border-t-4 border-r-4  border-t-mainBlue/60 border-r-mainBlue/60 shadow-[20px_10px_10px_rgba(0,0,0,0.35)] p-6 skew-y-[24deg] absolute transition-all duration-500 group-hover:left-[35%] top-[50%]  left-[40%] translate-x-[-50%] translate-y-[-50%]"
          >
            <img src={LogoClr} alt="" className=" h-full w-full" />
          </div>
          <div className=" transition-all duration-500 lg:group-hover:top-2 group-hover:-top-9 absolute -top-8 lg:top-6 right-[50%] translate-x-[50%]">
            <CountDown />
          </div>
        </div>
      </div>
      <div className=" z-0  absolute top-20 right-0 w-[200px] h-[200px] lg:h-[300px] lg:w-[300px] blur-sm">
        <img src={lines} alt="" className=" w-full h-full" />
      </div>
      <div className=" z-0  absolute bottom-[-20%] left-0 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] blur-sm">
        <img src={lines} alt="" className="rotate-[180deg] w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
