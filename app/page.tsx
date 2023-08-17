import Hero  from '@/components/Hero';
import Stats from '@/components/Stats';
import Image from 'next/image';
import Package from './../components/Package'
import TourCard from './../components/TourCard';
import TourList from './../components/TourList';
import Contact from './../components/Contact';
import Testimonial from './../components/Testimonial';
import Social from '@/components/Social';
import "./style.css";


export default function Home() {
  const title = "Koh Samui, Island trip, book a ticket for speed boat Quick & Easily.";
  const subTitle = "Speed up your aventure experince with our effortless online booking serivce";
  return (
      <div>
        <Hero title={title} subTitle={subTitle} />
          {/* <TourCard cardTitle="Tour Package" /> */}
          <Stats />
         
          <TourList cardTitle="Tour Package" />
          {/* <Contact /> */}
          <Social />
          
          <Testimonial /> 
      </div>   
  )
}
