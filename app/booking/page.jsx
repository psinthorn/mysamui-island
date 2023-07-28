import { Hero } from '@/components'

const Booking = () => {

  const title = "Booking Now";
  const subTitle = "Fast and Easy";

  return (
    <div>
    <Hero title={title} subTitle={subTitle} />
    {/* <FormBooking /> */}
  </div>
  )
}

export default Booking;