import React from 'react'
import './Hero.css'
import heropng from '../../assets/heroleftimg.png'

function Hero() {
  return (
       <div className='Hero'>
      <div className="container hero__container">
        <div className="hero__left">
          <h1 className='hero__title'><span>Studying</span> Online is now much easier</h1>
          <p className='hero__text'>TOTC is an interesting platform that will teach you in more an interactive way</p>

          <div className="hero__down">
            <button className='hero__btn' >Join for free</button>
            <button className='hero__btn'>
              Watch how it works
            </button>
          </div>
        </div>

        <div className="hero__right">
          <img className='hero__right__img' src={heropng} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Hero
