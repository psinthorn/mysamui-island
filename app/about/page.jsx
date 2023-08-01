import Hero from '@/components/Hero'

const About = () => {
  const title = "We're speedboat service in Koh Samui";
  const subTitle = "Speed up your aventure experince with our effortless online booking serivce";
  return (
    <div>
      <Hero title={title} subTitle={subTitle} />
    </div>

  )
}

export default About