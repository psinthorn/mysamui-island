'use client'
import { useEffect, useState } from 'react';
import FormBooking from '@/components/FormBooking';
import HowToPay from "../../components/HowToPay";



const Booking = () => {
  const [post, setPost] = useState("post")
  const title = "Booking Now";
  const subTitle = "Fast and Easy";

  const submitting = () => {

  }

  const createBooking = async () => {
        console.log("create booking");
  }

  return (
    <div>
    {/* <Hero title={title} subTitle={subTitle} /> */}
    <FormBooking 
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createBooking}
    />
    <HowToPay/>
  </div>
  )
}

export default Booking;