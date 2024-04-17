import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import SkillsSec from './components/SkillsSec'
import ClientSec from './components/ClientSec'

const Home = () => {
  return (
    <>
      <div style={{ background: "linear-gradient(20deg, hsl(130deg, 8%, 14%) 40%, hsl(0deg, 0%, 13%) 100%)" }}>
        <div className='px-5 w-[98%] md:w-[92%] mx-auto py-4' >
          <Hero />
          <About />
        </div>
      </div>
      <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
        <SkillsSec />
      </div>
      <div style={{ background: "hsla(39, 93%, 95%, 1)" }}>
      <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
        <ClientSec />
      </div>
      </div>
    </>
  )
}

export default Home