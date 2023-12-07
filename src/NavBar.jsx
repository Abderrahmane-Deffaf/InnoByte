import logo from "./assets/svg/logo.svg";
const NavBar = () => {
  return (
    <div className=" container px-4 fixed z-10">
      <div className=" py-4 flex items-center justify-between  ">
        <div className=" flex items-center gap-2">
          <img src={logo} alt="" className="" />
          <h1 className=" text-gray-100 font-goodtimes-hv text-l ">
            innobyte
          </h1>
        </div>
        <button className=" text-base  font-goodtimes-rg text-gray-100 border-2 px-2 py-1 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r from-mainBlue to-mainPurple hover:border-transparent hover:border-l-mainBlue hover:border-r-mainPurple hover:drop-shadow-blue hover:text-inherit">
          register now
        </button>
      </div>
    </div>
  );
};

export default NavBar;
