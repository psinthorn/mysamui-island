import React from 'react'

const TourCard = ({ cardTitle }) => {
  return (
    <div className='hero'>
      <div>
        <h1 className='text-xl'>{cardTitle}</h1>
      </div>
      <div>
        <div className='w-full h-full rounded-md border border-gray-600 p-3  '>
        </div>
      </div>
    </div>  
  )
}

export default TourCard
