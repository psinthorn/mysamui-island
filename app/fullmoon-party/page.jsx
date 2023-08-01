import Hero  from "@/components/Hero";
import FullmoonParty from "@/components/FullmoonParty";
import TourCard from "../../components/TourCard";

const Fullmoon = () => {
  const title = "Fullmoon Party Koh Phangan"
  const subTitle = "The Original of Fullmoon Party"
  return (
    <div className="hero">
      <Hero title={title} subTitle={subTitle} />
      <TourCard 
        cardTitle="Tour Package" 
      />
    </div>
  )
}

export default Fullmoon;