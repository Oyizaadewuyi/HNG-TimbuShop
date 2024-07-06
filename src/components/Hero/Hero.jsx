import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='Hero-section'>
        <h2>Shop with us here</h2>
        <div className='Hero-buttons'>
        <button className='brands'>All Brands</button>
        <button className='active'>New Arrivals</button>
        <button className='brands'> Offer Deals</button>
        </div>
      
    </div>
  )
}

export default Hero
