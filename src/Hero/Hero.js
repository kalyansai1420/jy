import React from 'react'
import './Hero.css'

import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero_left">
        <h2>
          Learn from the 25
          <br />
          year’s of experience ⚡
        </h2>
        <br />
        <p>
          Learn beyond classroom <br />
          Learn from  Bhaskar Jagatha,FCA,
          <br />
          Placements driven programs
        </p>
        <div className="hero_btn">
          <Link to="/contact" className="btn"> Explore Programmes</Link>
        </div>
      </div>
      <div className="hero_right">
        {/* <img src="../assets/img/hero.png" alt="hero" /> */}
        <img src="https://firebasestorage.googleapis.com/v0/b/vennelaworks-c79d8.appspot.com/o/ravi%2Fravi%20(6).jpeg?alt=media&token=e0d34b78-e761-4147-839a-c5d3c25acc17" alt="hero" />
      </div>
    </div>
  )
}

export default Hero