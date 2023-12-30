import React from 'react'

import { FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div className='bg-[var(--shade-3)] pt-20'>
        <p className='text-[18px] text-[var(--primary)] text-center '>JOIN OUR COMMUNITY ON</p>
        <h1 className='text-center text-[75px] pb-6 text-[var(--primary)]'>Instagram</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
          
          <div className='relative group'>
            <img className='md:h-[450px] object-cover hover:object-fit duration-300 ease-in-out w-full' src="https://uploads-ssl.webflow.com/626c67801c5a35414212846f/627c09dd107c6ac589483993_IG-2.jpg" alt="" />
            <div className='bg-transparent w-full h-full absolute top-0 group-hover:bg-black/40 duration-300 ease-in-out z-10'/>
            <div className='absolute opacity-0 bottom-0 group-hover:opacity-100 group-hover:bottom-6 duration-300 ease-in-out left-8 text-white flex items-center gap-2 z-50'>
                <FaInstagram />
                <p className='text-xl'>cat_ballet</p>
              </div>
          </div>
          <div className='relative group'>
            <img className='md:h-[450px] object-cover hover:object-fit duration-300 ease-in-out w-full' src="https://uploads-ssl.webflow.com/626c67801c5a35414212846f/627c09dd0b44bc011f8879ba_IG-3-p-800.jpeg" alt="" />
            <div className='bg-transparent w-full h-full absolute top-0 group-hover:bg-black/40 duration-300 ease-in-out z-10'/>
            <div className='absolute opacity-0 bottom-0 group-hover:opacity-100 group-hover:bottom-6 duration-300 ease-in-out left-8 text-white flex items-center gap-2 z-50'>
                <FaInstagram />
                <p className='text-xl'>cat_ballet</p>
              </div>
          </div>
          <div className='relative group'>
            <img className='md:h-[450px] object-cover hover:object-fit duration-300 ease-in-out w-full' src="https://uploads-ssl.webflow.com/626c67801c5a35414212846f/627c09dd03bc295952d4830a_IG-4-p-800.jpeg" alt="" />
            <div className='bg-transparent w-full h-full absolute top-0 group-hover:bg-black/40 duration-300 ease-in-out z-10'/>
            <div className='absolute opacity-0 bottom-0 group-hover:opacity-100 group-hover:bottom-6 duration-300 ease-in-out left-8 text-white flex items-center gap-2 z-50'>
                <FaInstagram />
                <p className='text-xl'>cat_ballet</p>
              </div>
          </div>
          <div className='relative group'>
            <img className='md:h-[450px] object-cover hover:object-fit duration-300 ease-in-out w-full' src="https://uploads-ssl.webflow.com/626c67801c5a35414212846f/627c09de107c6afaa7483994_IG-1-p-800.jpeg" alt="" />
            <div className='bg-transparent w-full h-full absolute top-0 group-hover:bg-black/40 duration-300 ease-in-out z-10'/>
            <div className='absolute opacity-0 bottom-0 group-hover:opacity-100 group-hover:bottom-6 duration-300 ease-in-out left-8 text-white flex items-center gap-2 z-50'>
                <FaInstagram />
                <p className='text-xl'>cat_ballet</p>
              </div>
          </div>

  

          
        </div>
    </div>
  )
}

export default Social
