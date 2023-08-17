import React from 'react'

const Stats = () => {
  return (
    <div className='hero mb-32'>
        <div className='min-w-[456px] mx-auto pt-8 mt-8 md:mt-0 md:pt-0'>
          <h1 className="head_text blue_gradient text-center md:text-left">Since 2011 </h1>
          <p className="text-sm text-center md:text-left">
            Our service state is your best guaranty and counting on
          </p>
        </div> 
        <div className='flex justify-between w-full mx-auto px-5 text-center md:text-right'>
          <div className='head_text bg-gray-500 orange_gradient text-4xl font-bold'>3650 Days</div>
          <div className='head_text bg-gray-500 orange_gradient text-4xl font-bold'>+20000 Seats</div>
          <div className='head_text bg-gray-500 orange_gradient text-4xl font-bold'>+7200 trips</div>
        </div>    
    </div>
  )
}

export default Stats;