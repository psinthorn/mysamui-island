import React from 'react'

const Stats = () => {
  return (
    <div className='hero'>
        <div className='min-w-[456px] mx-auto py-10'>
          <h1 className="head_text blue_gradient text-center md:text-left">Since 2011 </h1>
          <p className="text-sm">
            Our service state is your best guaranty and counting on
          </p>
        </div> 
        <div className='flex justify-between w-full mx-auto p-5'>
          <div className='head_text bg-gray-500 orange_gradient text-4xl font-bold'>3650 Days</div>
          <div className='head_text bg-gray-500 orange_gradient text-4xl font-bold'>+20000 Seats</div>
          <div className='head_text bg-gray-500 orange_gradient text-4xl font-bold'>+7200 trips</div>
        </div>    
    </div>
  )
}

export default Stats;