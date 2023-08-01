import React from 'react'

const TourCard = ({ cardTitle }) => {
  return (
    <div className='hero'>
        <h1 className='text-xl'>{cardTitle}</h1>
       <div className='w-full border-gray-600 p-3'>
      </div>
    </div>  
  )
}

export default TourCard
