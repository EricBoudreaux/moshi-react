import React from 'react'

const Reservations = () => {
  return (
    <div className='pt-6 px-12 border-y border-black'>
        <div className='md:flex items-center gap-4'>
            <div className='md:basis-1/3 mx-auto'>
                <img src="https://uploads-ssl.webflow.com/626c67801c5a35414212846f/627c09dd107c6ac589483993_IG-2.jpg" alt="" />
            </div>
            <div className='md:basis-2/3 max-w-[540px] mx-auto'>
                <h1 className=' text-[55px] text-[var(--primary)]'>Reserve a Table</h1>
                <div className='grid grid-cols-2'>
                    <div>
                        <p className='text-[var(--primary)] text-md font-semibold mt-4'>Name</p>
                        <input className='border-b outline-none mt-2' type="text" />
                    </div>
                    <div>
                        <p className='text-[var(--primary)] text-md font-semibold mt-4'>Phone</p>
                        <input className='border-b outline-none mt-2' type="text" />
                    </div>
                    <div>
                        <p className='text-[var(--primary)] text-md font-semibold mt-4'>Email</p>
                        <input className='border-b outline-none mt-2' type="text" />
                    </div>
                    <div>
                        <p className='text-[var(--primary)] text-md font-semibold mt-4'>Date</p>
                        <input className='border-b outline-none mt-2' type="text" />
                    </div>
                    <div>
                        <p className='text-[var(--primary)] text-md font-semibold mt-4'>Time</p>
                        <input className='border-b outline-none mt-2' type="text" />
                    </div>
                    <div>
                        <p className='text-[var(--primary)] text-md font-semibold mt-4'>Party</p>
                        <input className='border-b outline-none mt-2' type="text" />
                    </div>
                    <button className='bg-[var(--primary)] text-white font-semibold font-["Open_Sans"] col-span-2 mt-8 py-4'>Reserve Table</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Reservations
