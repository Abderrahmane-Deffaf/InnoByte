import React from 'react'
import TextFIeld from './TextFIeld'
import { GoChevronRight , GoChevronLeft } from "react-icons/go";
const Form3 = ({formHandler,handlers}) => {
    const fields = [
        {
            label : "Your role in the team",
            onchangee : handlers.roleHandler,
            value : handlers.role
        },
        {
            label : "describe your skill level",
            onchangee : handlers.skillLevelHandler,
            value : handlers.skillsDescrption
        },
        {
            label : "your portfolio",
            onchangee : handlers.portfolioHandler,
            value : handlers.portfolio
        },
    ]
  return (
    <div className='flex flex-col justify-between gap-[30px] h-full'>
    <div className='form2 col-span-2'>
        <article className='flex flex-col items-start gap-[10px]'>
            <label htmlFor="" className='text-white text-[13px] font-[300] pl-[10px] uppercase'>Team Members</label>
            <textarea onChange={handlers.teamMembersHandler} value={handlers.teamMembers} type="text" className=' h-full px-[26px] w-full  bg-white text-black py-3 border-none outline-none rounded-[18px]' />
        </article>
        <div className='flex flex-col gap-[30px] '>
            {
                fields.map((v,i)=> <TextFIeld value={v.value} onchange={v.onchangee} label={v.label} />)
            }
        </div>
    </div>
    <div className='flex justify-between gap-[15px] items-center'>
            <div onClick={()=>formHandler(2)} className=' flex items-center justify-center cursor-pointer  hover:bg-[#A036FC] hover:border-transparent hover:text-black smoth-t hover:gap-[8px] gap-[0px] hover:drop-shadow-green bg-transparent border-[2px] border-[#A036FC] text-[18px] sm:text-[28px] font-[700] text-[#A036FC] px-[7px]  h-[66px] rounded-[16px]'>
                <GoChevronLeft/>
                <span className='glow-text-p  uppercase '>
                    Previous
                </span>
            </div>
            <div onClick={()=>formHandler(4)} className=' flex items-center justify-center cursor-pointer  hover:bg-[#1ABE6C] hover:border-transparent hover:text-black smoth-t hover:gap-[8px] gap-[0px] hover:drop-shadow-green bg-transparent border-[2px] border-[#1ABE6C] text-[18px] sm:text-[28px] font-[700] text-[#1ABE6C] px-[7px]  h-[66px] rounded-[16px]'>
                <span className='  glow-text uppercase '>
                    NEXT
                </span>
                <GoChevronRight className='text-[36px]'/>
            </div>
        
        </div>
</div>
  )
}

export default Form3