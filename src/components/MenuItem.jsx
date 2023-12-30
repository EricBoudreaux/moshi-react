import React from 'react'

const MenuItem = ({ title, subTitle, price }) => {
  return (
    <div className='flex border-b border-black mx-12 pb-4 mt-12 justify-between'>
        <div>
            <p className='text-xl text-[300] mb-4'>{title}</p>
            <p className=''>{subTitle}</p>
        </div>
        <div>
            <p className='text-lg text-[100]'>{price}.-</p>
        </div>
    </div>
  )
}

export default MenuItem
