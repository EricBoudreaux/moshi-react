import React, { useState } from 'react'
import 'animate.css';

const Navbar = () => {

    const [nav, setNav] = useState(true)


  return (
    <div className='fixed z-50 right-6 bottom-8 md:hidden'>

    <button onClick={() => setNav(!nav)} className='bg-[var(--shade-3)] w-20 h-20 rounded-full hover:bg-[var(--secondary)] z-50 duration-300 ease-in-out'>Menu</button>


      <div className={nav ? 'fixed top-[-100%] duration-500 ease-in-out left-0 w-full h-full bg-[var(--shade-3)] z-10 ' : 'fixed top-0 duration-300 ease-in-out left-0 w-full h-full bg-[var(--shade-3)] z-10'}>
        <ul className='px-8 py-12'>
            <li>
                <div className='hover:text-black pb-2 duration-300 ease-in-out cursor-pointer text-[42px] text-[var(--shade-1)]'>Home</div>
            </li>
            <li>
                <div className='hover:text-black pb-2 duration-300 ease-in-out cursor-pointer text-[42px] text-[var(--shade-1)]'>Menu</div>
            </li>
            <li>
                <div className='hover:text-black pb-2 duration-300 ease-in-out cursor-pointer text-[42px] text-[var(--shade-1)]'>Our Story</div>
            </li>
            <li>
                <div className='hover:text-black pb-2 duration-300 ease-in-out cursor-pointer text-[42px] text-[var(--shade-1)]'>Reviews</div>
            </li>
            <li>
                <div className='hover:text-black pb-2 duration-300 ease-in-out cursor-pointer text-[42px] text-[var(--shade-1)]'>Reservations</div>
            </li>
            <li>
                <div className='hover:text-black pb-2 duration-300 ease-in-out cursor-pointer text-[42px] text-[var(--shade-1)]'>Blog</div>
            </li>
        </ul>

        <button onClick={() => setNav(!nav)} className='fixed right-6 bottom-8 bg-[var(--shade-3)] w-20 h-20 rounded-full  duration-300 ease-in-out border border-black animate__animated animate__fadeIn animate__delay-1s	'>Menu</button>
    </div>
    </div>
  )
}

export default Navbar
