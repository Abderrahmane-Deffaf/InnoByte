import "./hero.css";
import keyboard from "./../../assets/Hero/keyboard.svg";
import LogoClr from "../../assets/Hero/LogoClr.svg";
import lines from "../../assets/Hero/lines.svg";
import pcMonitor from "../../assets/Hero/pcMonitor.svg";
import CountDown from "./CountDown";
import { useState , useEffect } from "react";
import RegForm from "../registrartion-form/RegForm";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const showHandler = (value) => {
    setShowForm(value);
  };
  return (
    <div className=" hero-bg-gradient relative section ">
      <RegForm show={showForm} showHandler={showHandler}/>
      <div className="px-10  relative">
        <div className=" px-10 flex flex-col lg:gap-0 gap-[140px] lg:flex-row  items-center  justify-around  pt-[100px] lg:pt-0">
          <div className="title">
            <h2>inobyte hackathon</h2>
            <h1>
              <span>byte</span> by <span>byte</span> we, <br />{" "}
              <span className="innovate">innovate</span> the future
            </h1>
            <p className=" font-poppins text-xl text-gray-100 font-light my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              aperiam!
            </p>
            <button onClick={()=>showHandler(true)} className=" font-goodtimes-rg text-xl font-bold py-4 px-6 rounded-3xl  bg-gradient-to-r from-mainGreen to-mainBlue transition-all  duration-300 drop-shadow-green hover:bg-gradient-to-r hover:from-mainBlue hover:to-mainPurple hover:drop-shadow-blue">
              register now
            </button>
          </div>
          <div
            data-aos="fade-left"
            
            className=" z-10 hero-img group w-[500px] mx-auto h-[400px] lg:w-[550px] lg:h-[450px] relative transition-all duration-500 "
          >
            <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-mainGreen  drop-shadow-green group-hover:h-full group-hover:w-[88%] transition-all duration-500 h-[80%] w-[68%] rounded-full"></div>
            <div
              id="pc-monitor"
              className=" group-hover:top-[54%] group-hover:left-[54%] w-[250px] h-[250px] md:w-[300px] md:h-[300px] absolute top-[50%] left-[50%] transition-all duration-500 translate-x-[-50%] translate-y-[-50%]"
            >
              <img src={pcMonitor} alt="" className=" h-full w-full" />
            </div>
            <div
              id="keyboard"
              className=" transition-all duration-500 group-hover:bottom-[-10px] group-hover:left-[-10px]  w-[300px] h-[150px] absolute bottom-0 left-0 "
            >
              <img src={keyboard} alt="" className=" h-full w-full" />
            </div>
            <div
              id="logo-clr"
              className=" logo-bounce w-[140px] h-[140px] bg-gray-500/40 backdrop-blur-[1px]  rounded-[32px] border-t-4 border-r-4  border-t-mainBlue/60 border-r-mainBlue/60 shadow-[20px_10px_10px_rgba(0,0,0,0.35)] p-6 skew-y-[24deg] absolute transition-all duration-500 group-hover:left-[35%] top-[50%] left-[40%] translate-x-[-50%] translate-y-[-50%]"
            >
              <img src={LogoClr} alt="" className=" h-full w-full" />
            </div>
            <div className=" transition-all duration-500 group-hover:top-2 absolute top-6 right-[50%] translate-x-[50%]">
              <CountDown />
            </div>
          </div>
        </div>
      </div>
      <div
        className=" z-0  absolute top-20 right-0 w-[200px] h-[200px] lg:h-[300px] lg:w-[300px] blur-sm"
        data-aos="fade-left"
      >
        <img src={lines} alt="" className=" w-full h-full" />
      </div>
      <div
        className=" z-0  absolute bottom-[-20%] left-0 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] blur-sm"
        data-aos="fade-right"
      >
        <img src={lines} alt="" className="rotate-[180deg] w-full h-full" />
      </div>
    </div>
  );
};


export default Hero;
