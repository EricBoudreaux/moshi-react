import React from 'react'
import ReviewPost from './ReviewPost'

import Slider from "react-slick";
import Carousel from './Carousel';


const Reviews = () => {



  return (
    <div className='bg-[var(--shade-3)] py-16 px-8'>
        <div className='md:flex items-center justify-around'>
            <div>
                <h1 className='leading-snug text-[75px] pb-6 text-[var(--primary)] md:max-w-[250px]'>Some Love</h1>
                <p className='text-[18px] text-[var(--primary)] mt-[-50px] text-end md:text-start'>FROM OUR CUSTOMERS</p>
            </div>
            <div className='max-w-[520px]'>
            <Carousel />

            </div>
        </div>
    </div>
  )
}

export default Reviews
