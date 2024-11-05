import React from 'react'
import AboutUs from './Components/AboutUs'
import Features from './Components/AboutUs'
import Banner from './Components/AboutUs'
import Testimonials from './Components/AboutUs'
import HeroSection from './Components/HeroSection'

export default function AboutPage() {
  return (
    <>
    <HeroSection title="About Us"/>
    <AboutUs/>
    <Features/>
    <Banner/>
    <Testimonials/>
    
    </>
  )
}
