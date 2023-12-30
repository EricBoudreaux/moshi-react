import React from 'react'

const Home = () => {
  return (
    <div className='bg-[var(--shade-2)]'>
        <div className='px-8 py-28 md:flex items-center'>
            <img src="https://uploads-ssl.webflow.com/626c67801c5a35414212846f/627c09ddc790542ef6bf5fe3_half-section.jpg" className='mb-8 w-[100%] md:w-[50%] md:max-w-[620px] mx-auto h-full' alt="" />
            <div>
                <h1 className='text-[var(--secondary)] md:ml-[-200px] text-[75px] font-[900] tracking-wider'>With Love</h1>
                <p className='max-w-[570px] md:ml-[-100px] text-[24px] text-[var(--shade-3)]'>We strive to create a memorable experience while serving you the best environmentally sustainable dishes from our thriving local community.</p>
            </div>
        </div>
    </div>
  )
}

export default Home
