"use client"

import Image from 'next/image'
import { CustomButton } from '.'
import Package from './Package'
import { useState } from 'react'
import { HeroProps } from '@/types'

const Hero = ({title, subTitle}: HeroProps) => {
    // const [heroTitle, setHeroTitle] = useState("")
    // const [heroSubTitle, setHeroSubTitle] = useState("")

    const heroTitle = (title || "Koh Samui, Island trip, book a ticket for speed boat Quick & Easily.")
    const heroSubTitle = (subTitle || "Speed up your aventure experince with our effortless online booking serivce")

    const handleScroll = () => {};
        return (
            <div className='hero'>
                <div className='flex-1 flex-col pt-36 padding-x'>
                    <h1 className='hero__title'>{heroTitle}</h1>
                    <p className='hero__subtitle'>{heroSubTitle}</p>
                    
                    <div className='flex text-center items-center md:text-left'>
                        <CustomButton 
                            title="Island Trip"
                            containerStyles="bg-primary-blue rounded-full text-white mt-10"
                            handleClick={handleScroll}
                            btnType='button'
                        />
                        <CustomButton 
                            title="Fullmoon Party"
                            containerStyles="bg-primary-blue rounded-full text-white mt-10"
                            handleClick={handleScroll}
                            btnType='button'
                        />   
                            
                    </div>
                </div>

                <div className=' hero__image-container hidden md:block lg:block xl:block'>
                    <div className='hero__image hidden md:block lg:block xl:block'>
                        {/* <Image src="/mysamui/msi_speedboat_01_bg.png" alt="speedboat bg"  fill className='object-contain'/> */}
                    </div>
                    <div className='hero__image-overlay hidden md:block lg:block xl:block'/>          
                </div>            
            </div>
        )
}

export default Hero