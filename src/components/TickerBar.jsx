import React from 'react'

import Marquee from "react-fast-marquee";

import { FaRegSmileBeam } from "react-icons/fa";

const TickerBar = () => {
  return (
    <div className='py-6 bg-[var(--shade-3)] z-40'>
        <Marquee autoFill="true">
            <p className='mx-10 text-[16px] text-[100]'>Best sushi in town</p> <FaRegSmileBeam size={30}/> 
        </Marquee>
    </div>
  )
}

export default TickerBar
