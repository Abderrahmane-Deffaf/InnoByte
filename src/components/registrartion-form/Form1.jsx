import React from 'react'
import './Form.css'
const Form1 = ({formHandler}) => {
    
  return (
    <div className=' z-[9999] gap-[100px] flex flex-col text-[36px] justify-center h-full items-center font-[400]'>
        <span className='text-[36px] text-center capitalize'>Do you want to be part of this amazing hackathon?
            Join us in unleashing innovation!</span>
        <button 
        onClick={()=>formHandler(2)}
         className=" font-goodtimes-rg text-xl font-bold py-4 px-6 rounded-2xl hover:rounded-xl  transition-all  duration-300 drop-shadow-green hover:bg-gradient-to-r hover:from-mainBlue hover:to-[#A036FC] border-[2px] hover:border-none hover:drop-shadow-blue">
        continue to registrations
        </button>
    </div>
  )
}

export default Form1