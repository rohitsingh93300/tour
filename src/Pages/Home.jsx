import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeatureDestination/>
      <Gallery/>
      <Banner/>
      <Contact/>
    </>
  )
}

export default Home
