import React from 'react'
import { GoChevronRight , GoChevronLeft } from "react-icons/go";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Form4 = ({formHandler , submit, loading ,handlers}) => {

  return (
    <div className="flex  w-full flex-col justify-between h-full gap-[30px] ">
      <div className="flex flex-col w-full gap-[20px] sm:gap-[60px] justify-center items-center ">
        <article className="flex  flex-col w-full items-start gap-[10px]">
          <label
            htmlFor=""
            className="text-white text-[13px] font-[300] pl-[10px] uppercase"
          >
            your motivation
          </label>
          <textarea
            onChange={handlers.motivationHandler}
            value={handlers.motivation}
            type="text"
            className=" lg:h-[210px] px-[26px] w-[100%] bg-white text-black py-3 border-none outline-none rounded-[18px]"
          />
        </article>
        <article className="flex  w-full flex-col items-start gap-[10px]">
          <label
            htmlFor=""
            className="text-white text-[13px] font-[300] pl-[10px] uppercase"
          >
            anything to add
          </label>
          <textarea
            onChange={handlers.anythingToAddHandler}
            value={handlers.anythingToAddd}
            type="text"
            className=" lg:h-[210px] w-[100%]  px-[26px] bg-white text-black py-3 border-none outline-none rounded-[18px]"
          />
        </article>
      </div>
      <div className="flex justify-between gap-[15px] items-center">
        <div
          onClick={() => formHandler(3)}
          className=" flex items-center justify-center cursor-pointer  hover:bg-[#A036FC] hover:border-transparent hover:text-black smoth-t hover:gap-[8px] gap-[0px] hover:drop-shadow-green bg-transparent border-[2px] border-[#A036FC] text-[18px] sm:text-[28px] font-[700] text-[#A036FC] px-[7px]  h-[66px] rounded-[16px]"
        >
          <GoChevronLeft />
          <span className="glow-text-p  uppercase ">Previous</span>
        </div>
        <div
          onClick={submit}
          className=" flex items-center justify-center cursor-pointer  hover:bg-[#1ABE6C] hover:border-transparent hover:text-black smoth-t hover:gap-[8px] gap-[0px] hover:drop-shadow-green bg-transparent border-[2px] border-[#1ABE6C] text-[18px] sm:text-[28px] font-[700] text-[#1ABE6C] px-[7px]  h-[66px] rounded-[16px]"
        >
          {loading ? (
            <p className="flex gap-2 items-center">
              Hold on <AiOutlineLoading3Quarters />
            </p>
          ) : (
            <>
              <span className="  glow-text uppercase ">submit</span>
              <GoChevronRight className="text-[36px]" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form4
/* */