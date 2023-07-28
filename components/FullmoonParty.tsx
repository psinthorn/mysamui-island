"use client"

import Image from 'next/image'
import { CustomButton } from '.'
import { Hero } from '@/components'

const FullmoonParty = () => {
    const title = "Koh Phangan Is An Original Fullmoon Party"
    const subTitle = "round-trip with speed boat Koh Samui - Phangan"

  const handleScroll = () => {};
  return (
    <Hero title={title} subTitle={subTitle} />
  )
}

export default  FullmoonParty