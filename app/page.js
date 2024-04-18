import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Skills from './Components/Skills'

const page = () => {
  return (
    <div className=''>
      <Hero />
      <div className='bg-gray-800'>
      <About />
      </div>
      <Skills />
      <div className='bg-gray-800 lg:py-12'>
      <Projects />
      </div>
      <Testimonials />
      <div className='bg-gray-800 lg:pb-8 pt-4 pb-4'>
      <Contact/>
      </div>
    </div>
  )
}

export default page