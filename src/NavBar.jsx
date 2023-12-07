import logo from './assets/Hero/logo.svg'
const NavBar = () => {
    return ( 
        <div className=' container  px-10 fixed z-10' >
        <div className=' py-6  flex items-center justify-between  '>
            <div className=' flex items-center gap-4'>
                <img src={logo} alt="" className=' w-[30px] h-[30px]' />
                <h1 className=' text-gray-100 font-goodtimes-hv text-xl '>innobyte</h1>
            </div>
            <button className=' text-base  font-goodtimes-rg text-gray-100 border-2 px-6 py-2 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r from-mainBlue to-mainPurple hover:border-transparent hover:border-l-mainBlue hover:border-r-mainPurple hover:drop-shadow-blue hover:text-inherit'>
                register now
            </button>
        </div>
        </div>
     );
}
 
export default NavBar;