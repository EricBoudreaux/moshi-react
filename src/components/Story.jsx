import React from 'react'

const Story = () => {
  return (
    <div className='pt-24 flex flex-col lg:flex-row'>
        <div className='md:basis-1/2'>
            <img className='w-full object-contain' src="https://uploads-ssl.webflow.com/626c67801c5a35414212846f/627c09dd28f6ccb10d7cc225_Our-story.jpg" alt="" />
        </div>
        <div className='bg-[var(--shade-2)] md:basis-1/2 p-16 md:pt-[19%]'>
            <h1 className='text-[var(--secondary)] text-[75px] font-[900] tracking-wider'>Our Story</h1>
            <p className='max-w-[570px] text-[18px] text-[var(--shade-3)]'>What started as a simple passion for homemade sushi has rapidly evolved into a second home for all sushi enthusiast.</p>

        
      </div>
    </div>
  )
}

export default Story
