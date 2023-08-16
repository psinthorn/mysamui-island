import Link from 'next/link'
import { packageInfo } from './../constants'

const TourCard = ({ cardTitle }) => {
  return (
    <div className='hero'>
      
        <div className="flex flex-col w-full  mx-auto px-4 mt-10 space-y-12 md:flex-row md:space-y-0">
          <div className='flex flex-col space-y-12 md:w-1/2' >
            {/* <h1 className="max-w-md text-4xl text-center md:text-left">Book With Us</h1> */}
            <h1 className="max-w-md head_text blue_gradient text-center md:text-left">Book With Us NOW</h1>
            <p className='max-w-sm text-gray-700 text-center md:text-left'>{cardTitle} Koh Samui, Island trip, book a ticket for speed boat Quick & Easily.</p>
          </div>

          {/* List of package */}
          <div className='flex flex-col space-y-8 pt-4 md:w-1/2 md:pt-8'>
          { packageInfo.map((tour) => (
            <div>
              {/* package item 1  */}
              <div className='flex flex-col space-y-3 rounded-l-full md:space-y-0 md:space-x-6 md:flex-row'>
              {/* heading  */}
              <div className="rounded-l-full text-white bg-blue-300 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full px-4 py-2 text-white bg-blue-800 md:py-1">
                    {tour.number}
                  </div>
                  <h3 className="text-base font-bold pr-3 md:mb-4 md:hidden">{tour.title}</h3>
                </div>
              </div>
              <h3 className="hidden font-bold mb-4 text-lg md:block">{tour.title}</h3>
            </div>
              <p className="flex text-gray-700">
                  {tour.info}
              </p>
              <div className="text-center items-center py-8 md:text-righ">
                <Link href="/booking" className='rounded-full text-red-400 py-2 px-8 md:text-righ'>{tour.rate}</Link>
                <Link href="/booking" className='rounded-full text-white  bg-blue-900 py-2 px-8 md:text-righ'>Book</Link>
              </div>
            </div>
          ))}
          </div>
        </div>
    </div>  
  )
}

export default TourCard
