import React from 'react'
import TextFIeld from './TextFIeld'
import { GoChevronRight , GoChevronLeft } from "react-icons/go";
const Form2 = ({formHandler}) => {
    const fields = [
        {
            label : "fullname",
            onchangee : ''
        },
        {
            label : "email",
            onchangee : ''
        },
        {
            label : "phone number",
            onchangee : ''
        },
        {
            label : "university",
            onchangee : ''
        },
        {
            label : "team name",
            onchangee : ''
        },
    ]
  return (
    <div className='flex flex-col justify-between h-full'>
        <div className='form2 col-span-2'>
            {
                fields.map((v,i)=> <TextFIeld label={v.label} />)
            }
        </div>
        <div className='flex justify-end'>
            <div onClick={()=>formHandler(3)} className=' flex items-center justify-center cursor-pointer  hover:bg-[#1ABE6C] hover:border-transparent hover:text-black smoth-t hover:gap-[8px] gap-[0px] hover:drop-shadow-green bg-transparent border-[2px] border-[#1ABE6C] text-[28px] font-[700] text-[#1ABE6C] w-[182px]  h-[66px] rounded-[16px]'>
                <span className='  glow-text '>
                    NEXT
                </span>
                <GoChevronRight className='text-[36px]'/>
            </div>
        </div>
    </div>
  )
}

export default Form2