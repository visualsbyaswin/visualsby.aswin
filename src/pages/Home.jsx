import React from 'react'
import Hero from '../components/Hero/Hero'
import StickyScroller from '../components/StickyScroller/StickyScroller'
import AboutSection from '../components/about/About'
import Scroller from '../components/ScrollerAbout/Scroller'

const Home = () => {
  return (
   <main className='home'>
    <Hero/>
    <StickyScroller/>
    <Scroller/>
    <AboutSection/>
   </main>
  )
}

export default Home