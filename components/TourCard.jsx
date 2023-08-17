import Link from 'next/link'
import { packageInfo } from './../constants'

const TourCard = ({ cardTitle }) => {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <h1 className="head_text blue_gradient">
          Book With Us Now
        </h1>
        {/* <p className="flex text-sm">
          Book with us get special rate 
        </p> */}
      </div>
      <div className='hero'>
          {packageInfo.map((tour, index) => (
            <div className="min-h-[320px] min-w-[320px] rounded-md text-center border border-blue-900 m-auto px-4 my-32 space-y-12 ">
              {tour.title}
            </div>
          ))} 
        {/* </div> */}
      </div> 
    </div>
  )
}

export default TourCard
