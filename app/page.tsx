import Hero  from '@/components/Hero'
import Stats from '@/components/Stats'
import Image from 'next/image'
import Package from './../components/Package'

export default function Home() {
  const title = "Koh Samui, Island trip, book a ticket for speed boat Quick & Easily.";
  const subTitle = "Speed up your aventure experince with our effortless online booking serivce";
  return (
      <div>
        <Hero title={title} subTitle={subTitle} />
        <Stats />
        <div>
        </div>
      </div>   
  )
}
