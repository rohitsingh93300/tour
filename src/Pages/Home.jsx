import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
// import MultipleItems from '../components/component'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeatureDestination/>
      <Gallery/>
      <Banner/>
      {/* <MultipleItems/> */}
      <Contact/>
    </>
  )
}

export default Home
