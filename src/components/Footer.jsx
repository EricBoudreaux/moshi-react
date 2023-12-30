import React from 'react'

import { FaArrowTurnUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='py-20 px-5'>
        <div className='flex items-center justify-center'>
            <h1 className='text-[var(--primary)] font-[800] tracking-wide text-[80px]'>Mooshi.</h1>
            <button className='bg-[var(--primary)] p-6 rounded-full text-white'><FaArrowTurnUp size={25}/></button>
        </div>
        <div className='md:text-center'>
            <ul>
                <li>
                    <p className='text-[28px] font-[400]'>MENU</p>
                </li>
                <li>
                    <p className='text-[28px] font-[400]'>OUR STORY</p>
                </li>
                <li>
                    <p className='text-[28px] font-[400]'>REVIEWS</p>
                </li>
                <li>
                    <p className='text-[28px] font-[400]'>RESERVATIONS</p>
                </li>
                <li>
                    <p className='text-[28px] font-[400]'>BLOG</p>
                </li>

                <li>
                    <p className='text-[28px] font-[400] mt-12'>INSTAGRAM</p>
                </li>
                <li>
                    <p className='text-[28px] font-[400]'>FACEBOOK</p>
                </li>
            </ul>
        </div>
        <div className='text-center mt-12'>
            (333) 333-3333 hello@mooshi.com
        </div>
    </div>
  )
}

export default Footer
