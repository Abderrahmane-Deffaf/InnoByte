import React from 'react'

const TextFIeld = ({label = "field" , onchange}) => {
  return (
    <article className='flex flex-col items-start gap-[10px]'>
        <label htmlFor="" className='text-white text-[13px] font-[300] pl-[10px] uppercase'>{label}</label>
        <input  type="text" className=' text-black px-[26px] w-[530px] h-[70px] bg-white border-none outline-none rounded-[18px]' />
    </article>
  )
}

export default TextFIeld