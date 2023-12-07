import logo from "./assets/svg/logo.svg";
const NavBar = () => {
  return (
    <div className=" container px-4 fixed z-10">
      <div className=" py-4 flex  items-center justify-center  ">
        <div className=" flex items-center gap-2">
          <img src={logo} alt="" className="" />
          <h1 className=" text-gray-100 font-goodtimes-hv text-l ">
            innobyte
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
