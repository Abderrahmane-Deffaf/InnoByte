import keyboard from "./keyboard.svg";
import LogoClr from "./LogoClr.svg";
import lines from "./lines.svg";
import pcMonitor from "./pcMonitor.svg";
import CountDown from "./CountDown";
import "./hero.css";

const Hero = () => {
  const [word, setWord] = useState("innovate");
  
  return (
    <div className=" hero-bg-gradient relative section ">
      <div className="px-10  relative">
        <div className=" px-10 flex flex-col  gap-[140px] lg:flex-row items-center  justify-around  pt-[100px] lg:pt-0">
          <div className="title select-none cursor-logo   ">
            <h2>innobyte hackathon</h2>
            <h1>
              <span>byte</span> by <span>byte</span> we, <br />{" "}
              <span
                className="innovate"
                onMouseEnter={() => {
                  setTimeout(()=>{ setWord("innobyte")}, 150);
                }}
                onMouseLeave={() => {
                   setWord("innovate");
                }}
              >
                {word}
              </span>{" "}
              the future

            </h1>
            <p className=" font-poppins text-xl text-gray-100 font-light my-6">
            Where Creativity and Innovation Collide in Every Byte.            </p>
            <button className=" font-goodtimes-rg text-xl font-bold py-4 px-6 rounded-3xl  bg-gradient-to-r from-mainGreen to-mainBlue transition-all  duration-300 drop-shadow-green hover:bg-gradient-to-r hover:from-mainBlue hover:to-mainPurple hover:drop-shadow-blue">
              register now
            </button>
          </div>
          <div
            data-aos="fade-left"
            className=" z-10 hero-img group w-[400px]  mx-auto h-[400px] lg:w-[550px] lg:h-[450px] relative transition-all duration-500 "

          >
            <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-mainGreen  drop-shadow-green group-hover:drop-shadow-[0px_0px_80px_rgba(26,190,108,0.5)] group-hover:h-[400px] group-hover:w-[400px] lg:group-hover:h-[500px] lg:group-hover:w-[500px] transition-all duration-500 h-[300px] lg:h-[400px] w-[300px] lg:w-[400px] rounded-full"></div>
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
