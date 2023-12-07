import React from 'react'

const TextFIeld = ({label = "field" , value ,onchange}) => {
  const changeHandler = (e) => {
    onchange(e.target.value)
  }
  return (
    <article className='flex flex-col w-full items-start gap-[10px]'>
        <label htmlFor="" className='text-white text-[13px] font-[300] pl-[10px] uppercase'>
          {label}
        </label>
        <input 
        value={value} 
        onChange={changeHandler}  
        type="text" 
        className=' text-black px-[26px] w-[100%] h-[70px] bg-white border-none outline-none rounded-[18px]' />
    </article>
  )
}

export default TextFIeld