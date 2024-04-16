import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import GetStarted from './components/GetStarted'
import SkillsSec from './components/SkillsSec'

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
      <div style={{ background: "hsla(127, 8%, 14%, 1)" }}>
        <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
          <GetStarted />
        </div>
      </div>

    </>
  )
}

export default Home