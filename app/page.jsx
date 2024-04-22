import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'

const Home = () => {
  return (
    <div className='w-[98%] md:w-[90%] mx-auto'>
      <Hero />
      <Gallery />
    </div>
  )
}

export default Home