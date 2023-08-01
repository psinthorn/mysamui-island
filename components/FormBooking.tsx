"use client"
import { BookingProps } from '@/types';
import { useState } from 'react';

const FormBooking = ({ firstName, lastName ,hotelName, roomNo, email, whatsapp, phone, remarkNote }: BookingProps) => {
    const [booking, setBooking] = useState({});
    return (
      <section className='w-full max-w-full flex-center flex-col mt-10 mb-10'>
        <h1 className="head_text text-left"> 
          <span className="blue_gradient"> Booking</span> 
        </h1>
        <p className="desc text-left max-w-md"> Book now with special discount </p>
  
        <form
          onSubmit={() => {}}
          className='flex flex-col mt-10 w-full max-w-2xl gap-7 glassmorphism '
        >
        <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Name {' '} <span className="font-normal"></span>
            </span>
            <input
              value={firstName}
              placeholder=''
              className='form_input'
              required
              onChange={(e) => setBooking({...booking, tag: e.target.value})}
            />
         </label>

        <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Sure Name {' '} <span className="font-normal"></span>
            </span>
            <input
              value={lastName}
              placeholder=''
              className='form_input'
              required
              onChange={(e) => setBooking({...booking, tag: e.target.value})}
            /> 
          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Hotel Name {' '} <span className="font-normal"></span>
            </span>
            <input
              value={hotelName}
              placeholder=''
              className='form_input'
              required
              onChange={(e) => setBooking({...booking, tag: e.target.value})}
            /> 
          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Room No. {' '} <span className="font-normal"></span>
            </span>
            <input
              value={roomNo}
              placeholder=''
              className='form_input'
              required
              onChange={(e) => setBooking({...booking, tag: e.target.value})}
            /> 
          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Whatsapp No. {' '} <span className="font-normal">(optional)</span>
            </span>
            <input
              value={whatsapp}
              placeholder=''
              className='form_input'
              required
              onChange={(e) => setBooking({...booking, tag: e.target.value})}
            /> 
          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Email {' '} <span className="font-normal"></span>
            </span>
            <input
              value={email}
              placeholder=''
              className='form_input'
              required
              onChange={(e) => setBooking({...booking, tag: e.target.value})}
            /> 
          </label>

          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Mobile/Telephone No. {' '} <span className="font-normal"></span>
            </span>
            <input
              value={phone}
              placeholder=''
              className='form_input'
              required
              onChange={(e) => setBooking({...booking, tag: e.target.value})}
            /> 
          </label>
       
          <label>
            <span className="font-satoshi font-semibold text-base text-gray-700">
              Remark Note
            </span>
            <textarea
              value={remarkNote}
              placeholder='Write your prompt here...'
              className='form_textarea'
              required
              onChange={(e) => setBooking({...booking, prompt: e.target.value})}
            />
            
          </label>
    
          {/* <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">cancel</Link>
            <button 
            type="submit"
            disabled={submitting}
            className='px-5 py-1.5 text-sm rounded-full bg-primary-orange text-white '
          >
            {submitting ? `$` : type }
          </button> 
          </div> */}
         
        </form>
      </section>
    )
}

export default FormBooking;