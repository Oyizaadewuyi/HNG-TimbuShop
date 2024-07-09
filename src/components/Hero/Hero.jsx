import React from 'react'
import style from './style.module.css'

const Hero = () => {
  return (
    <div className={style.Hero}>
        <h2>Shop with us here</h2>
        <div className={style.button}>
        <button className={style.brands}>All Brands</button>
        <button className={style.active}>New Arrivals</button>
        <button className={style.brands}> Offer Deals</button>
        </div>
      
    </div>
  )
}

export default Hero
