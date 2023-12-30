import React from 'react'

const Hero = () => {
  return (
    <div className='hero w-full h-screen'>

        <div className='flex flex-col-reverse md:flex-col justify-around px-4 py-12'>
            <div className='flex justify-center gap-16 md:mt-20 h-[400px]'>
                <h1 className='text-[var(--secondary)]  font-[800] tracking-wide text-[120px] md:text-[150px] pt-24'>Mooshi.</h1>
                <div className='hidden md:flex flex-col text-[var(--secondary)] h-[400px] justify-center'>
                    <ul>
                        <li>
                            <h3 className='hover:opacity-50 duration-300 ease-in-out cursor-pointer'>menu</h3>
                        </li>
                        <li>
                            <h3 className='hover:opacity-50 duration-300 ease-in-out cursor-pointer'>our story</h3>
                        </li>
                        <li>
                            <h3 className='hover:opacity-50 duration-300 ease-in-out cursor-pointer'>reviews</h3>
                        </li>
                        <li>
                            <h3 className='hover:opacity-50 duration-300 ease-in-out cursor-pointer'>reservations</h3>
                        </li>
                        <li>
                            <h3 className='hover:opacity-50 duration-300 ease-in-out cursor-pointer'>blog</h3>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <p className='text-[var(--secondary)] mb-1'>Tue-Sun</p>
                <p className='text-[var(--secondary)] mb-8'>8:00 am - 9:00 pm</p>
                <p className='text-[var(--secondary)]'>6th Ave, Seattle WA 98121</p>
                
            </div>
        </div>

    </div>
  )
}

export default Hero
