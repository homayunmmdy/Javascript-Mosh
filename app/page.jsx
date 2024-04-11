import React from 'react'
import Hero from './components/Hero'

const Home = () => {
  return (
    <div style={{background: "linear-gradient(20deg, hsl(130deg, 8%, 14%) 40%, hsl(0deg, 0%, 13%) 100%)"}}>
      <div className=' w-[92%] mx-auto' >
        <Hero />
      </div>
    </div>
  )
}

export default Home