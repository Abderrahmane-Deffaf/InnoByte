import React from 'react'
import './aboutBytecraft.css'
import bg_top from '../event-location/assets/bg_top.png'
import pc from './assets/pc.png'

const AboutBytecraft = () => {

  return (
    <>
      <section
        className='section  flex justify-center flex-col items-center relative'
      >
        <div className='text-center'>
          <h3 className='text-decoration-3'>Bytecraft</h3>
          <h1 className='text-decoration-4'>Bytecraft CLub</h1>
        </div>
        <div
          className='absolute top-1/2 z-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[260px]'
        >
          <img className={`logo`} src='/about_bytecraft/logo.png' alt='SYPHAX' style={{ zIndex: 1 }} />
        </div>
        <div className='box1' initial={{ y: 500 }} animate={{ y: 0 }} transition={{ delay: 0.6 }} style={{ zIndex: 2 }}>
          <div
            className='block text-white md:text-[25px] lg:text-[30px] text-[20px] w-[350px] lg:w-[800px] md:w-[600px]'
          >
            Syphax Hotel offers a comfortable and welcoming retreat for visitors. As a 3-star establishment, it combines
            affordability with a range of amenities. It is an ideal choice for those seeking a modest yet comfortable stay
            in a picturesque Algerian setting.
          </div>
        </div>
        <div className='social_media'>
          <a href='https://web.facebook.com/ByteCraftEstin/' className='link'>Facebook</a>
          <a href='https://www.instagram.com/bytecraft.estin/' className='link'>Instgram</a>
          <a href='https://www.linkedin.com/company/bytecraft-club/posts/' className='link'>linkedin</a>
        </div>
        <img className='absolute blur-sm left-0 z-0  bottom-[-150px] w-[350px] h-[400px]' src={bg_top} alt='image' />
        <img style={{filter: 'drop-shadow(0px 0px 200px rgba(255, 255, 255, 0.40))'}} className='absolute -right-[30px] md:right-[20px] -top-[90px] md:top-[-40px] w-[140px] md:w-[200px] h-[140px] md:h-[200px]' src={pc} alt='image' />
      </section>
    </>
  )
}

export default AboutBytecraft