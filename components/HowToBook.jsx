import React from 'react'

const HowToBook = () => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='flex-1'>
        <h1 className='text-2xl'>How to book</h1>
        <ul>
          <li>- Online Booking via Official website (this website)</li>
          <li>- Send Email to info@mysamuiisland.com</li>
          <li>- Line</li>
          <li>- Facebook Messanger</li>
          <li>- Whatsapp</li>
        </ul>
      </div>
      <div className=''>
        <h1 className='text-2xl'>How to Pay</h1>
        <ul>
          <li>- Online Payment</li>
            <p>
              Paypal Information
            </p>
          <li>- Transfer to Bank account</li>
            <p>
              Bank Detail: 
            </p>
          <li>- Pay at Pier</li>
        </ul>
      </div>
    </div>
  )
}

export default HowToBook