import React from 'react'

import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const ReviewPost = ({ post, name}) => {
  return (
    <div className='md:max-w-[400px]'>

    <div className='flex text-yellow-500 gap-2 mt-12 mb-6'>
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} />
    <FaStar size={20} />
</div>

<div>
    {post}

    <p className='font-bold'>{name}</p>

</div>
</div>
  )
}

export default ReviewPost
