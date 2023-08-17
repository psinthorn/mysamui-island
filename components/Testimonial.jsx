import { testimonialsMedia } from "@/constants"
import Image from "next/image"


const Testimonial = () => {
  return (
    <div>
      <div className="flex flex-row justify-center mt-32">
        <h1 className="head_text blue_gradient">
          Testimonials
        </h1>
      </div>
      <div className='hero mb-80'>
       
        <div className="flex flex-col justify-between items-center text-center w-full md:flex-row">
        {testimonialsMedia.map((media, index) => (
          <div key={index} className='rounded-md max-w-sm p-6 mt-24 items-center text-center   bg-slate-200 md:w-1/3 :flex-row '>
            <div className="flex flex-row justify-center">
             
              <div className="w-32 h-32 rounded-full -mt-24 bg-slate-600"></div>
             
            </div>
            <h5 className="text-lg font-bold">{media.name}</h5>
            <p className="text-sm text-gray-800 p-8">
              {media.comment}
            </p>
            <p className="text-sm">
              {media.media}
            </p>
        </div>
        ))}   
        </div>
        

      </div>
    </div>
  )
}

export default Testimonial