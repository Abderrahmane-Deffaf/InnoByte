import React from 'react'
import { GoChevronRight , GoChevronLeft } from "react-icons/go";
const Form4 = ({formHandler}) => {
  return (
    <div className='flex flex-col justify-between h-full'>
        <div className='flex  gap-[60px] justify-center items-center '>
            <article className='flex flex-col items-start gap-[10px]'>
                <label htmlFor="" className='text-white text-[13px] font-[300] pl-[10px] uppercase'>your motivation</label>
                <textarea  type="text" className=' h-[310px] px-[26px] w-[530px] bg-white text-black py-3 border-none outline-none rounded-[18px]' />
            </article>
            <article className='flex flex-col items-start gap-[10px]'>
                <label htmlFor="" className='text-white text-[13px] font-[300] pl-[10px] uppercase'>anythign to add</label>
                <textarea  type="text" className=' h-[310px] px-[26px] w-[530px] bg-white text-black py-3 border-none outline-none rounded-[18px]' />
            </article>
        </div>
        <div className='flex justify-between items-center'>
            <div onClick={()=>formHandler(3)} className=' flex items-center justify-center cursor-pointer  hover:bg-[#A036FC] hover:border-transparent hover:text-black smoth-t hover:gap-[8px] gap-[0px] hover:drop-shadow-green bg-transparent border-[2px] border-[#A036FC] text-[28px] font-[700] text-[#A036FC] w-[210px]  h-[66px] rounded-[16px]'>
                <GoChevronLeft/>
                <span className='glow-text-p  uppercase '>
                    Previous
                </span>
            </div>
            <div className=' flex items-center justify-center cursor-pointer  hover:bg-[#1ABE6C] hover:border-transparent hover:text-black smoth-t hover:gap-[8px] gap-[0px] hover:drop-shadow-green bg-transparent border-[2px] border-[#1ABE6C] text-[28px] font-[700] text-[#1ABE6C] w-[182px]  h-[66px] rounded-[16px]'>
                <span className='  glow-text uppercase '>
                    NEXT
                </span>
                <GoChevronRight className='text-[36px]'/>
            </div>
        
        </div>
    </div>
  )
}

export default Form4