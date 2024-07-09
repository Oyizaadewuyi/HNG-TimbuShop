// import React from 'react'
// import search from "../../assets/search-icon.svg"
// import cart from "../../assets/cart-icon.svg"
import "./index.css";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom' ;


const Header = () => {
    return (
        <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
          
          <div className="navbar-links">
            
            <a href="#home">
                <Link to="/">Home</Link>
                </a>
            <a href="#about">
                <Link to="/">About us</Link>
                </a>
            <a href="#shop">
                <Link to="/"><span>Shop</span></Link></a>
          </div>
          <div className="navbar-brand">TimbuShop</div>
          <div className="navbar-icons">
           <FontAwesomeIcon icon={faSearch} />

            <Link to="/AddToCart" className="Link"><FontAwesomeIcon icon={faShoppingCart} /> </Link>
          </div>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
    );
  };
  
  
  export default Header;
  
{/* <header className="header">


<div className='hamburger-menu'>
            <div className='bar'></div>
            <div className='bar'></div>
             <div className='bar'></div>
        
        </div>
    

       

    <nav
    className='main-nav'>
        <ul className='nav-links'>
            <li><a href="#HOME">Home</a></li>
            <li><a href="#About us">About us</a></li>
       
            <li><a href="#shop"><span>Shop</span></a></li>

 </ul>

 </nav>
<nav>
        <ul className='timbu'>
            <li><a href="#timbu">TimbuShop</a></li>
        </ul>
        </nav>
<div className='right-icon'>
        <ul className='search'>
            <img src={search} alt="" />
            </ul>
            <ul className='cart'>
            <img src={cart} alt="" />
            </ul>
            {/* <ul className='SIGNUP'>
            <li><a href="signup">Sign Up</a></li>
        </ul> */}
        // <div className='hamburger-menu-content'>
        // <button className='Signup'>Sign Up</button>
        // </div>
        // // </div>

       
    // </header> 
  