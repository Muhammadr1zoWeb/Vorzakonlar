import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import OurSucses from '../../components/OurSucses/OurSucses'

function Home() {
  return (
    <div className='home'>
      <Hero/>
      <OurSucses/>
    </div>
  )
}

export default Home
