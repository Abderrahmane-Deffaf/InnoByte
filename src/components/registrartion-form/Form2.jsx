import React from 'react'
import TextFIeld from './TextFIeld'
import { GoChevronRight , GoChevronLeft } from "react-icons/go";
const Form2 = ({formHandler,handlers}) => {
    const fields = [
        {
            label : "fullname",
            onchangee : handlers.fullnameHandler,
            value : handlers.name
        },
        {
            label : "email",
            onchangee : handlers.emailHandler,
            value : handlers.email
        },
        {
            label : "phone number",
            onchangee : handlers.phoneNumberHandler,
            value : handlers.phoneNumber
        },
        {
            label : "university",
            onchangee : handlers.universityHandler,
            value : handlers.institution
        },
        {
            label : "team name",
            onchangee : handlers.teamNameHandler,
            value : handlers.team
        },
    ]
  return (
    <div className='flex flex-col  lg:gap-[30px] justify-between h-full'>
        <div className='form2 '>
            {
                fields.map((v,i)=> <TextFIeld key={i} value={v.value} onchange={v.onchangee} label={v.label} />)
            }
        </div>
        <div className='flex justify-end'>
            <div onClick={()=>formHandler(3)} className=' flex items-center justify-center cursor-pointer  hover:bg-[#1ABE6C] hover:border-transparent hover:text-black smoth-t hover:gap-[8px]  hover:drop-shadow-green bg-transparent border-[2px] border-[#1ABE6C] text-[28px] font-[700] text-[#1ABE6C] px-3 mt-3 py-1 rounded-[16px]'>
                <span className='  glow-text '>
                    NEXT
                </span>
                <GoChevronRight className=' text-lg lg:text-[36px]'/>
            </div>
        </div>
    </div>
  )
}

export default Form2