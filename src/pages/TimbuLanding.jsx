import React from 'react'
import Header from '../components/Header/Navbar'
 import Hero from '../components/Hero/Hero'
 import ProductPage from '../components/Product/ProductPage'
import { TimbuAddToCart } from './TimbuAddToCart/TimbuAddToCart'
import Footer from '../components/Footer/Footer'
// import Footer from '../components/Footer/Footer'

export function TimbuLanding() {
  return (
    <div id="top-page">
    <Header/>
    <Hero/>
   <ProductPage/> 
    <Footer/>

    
   
    
    
    
    </div>
    )
}

export default TimbuLanding
