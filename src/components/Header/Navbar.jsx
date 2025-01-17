// import React from 'react'
// import search from "../../assets/search-icon.svg"
// import cart from "../../assets/cart-icon.svg"
import "./index.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
function toggleMenu() {
  if(document.querySelector('nav').querySelector('.left').classList.contains('menu-closed')) {
      document.querySelector('nav').querySelector('.left').classList.remove('menu-closed');
      document.querySelector('nav').querySelector('.left').classList.add('menu-open');
  }
  
  else if(document.querySelector('nav').querySelector('.left').classList.contains('menu-open')) {
      document.querySelector('nav').querySelector('.left').classList.remove('menu-open');
      document.querySelector('nav').querySelector('.left').classList.add('menu-closed');
  }
}

function goHome(e) {
  e.target.parentElement.parentElement.childNodes.forEach(node => {
      node.firstChild.classList.remove('active-link');
  });
  document.querySelector('nav').querySelector('.left').classList.add('menu-closed');
}

function styleNavLink(e) {
  e.target.parentElement.parentElement.childNodes.forEach(node => {
      node.firstChild.classList.remove('active-link');
  });
  e.target.classList.add('active-link');
  document.querySelector('nav').querySelector('.left').classList.add('menu-closed');
}

return (
  <nav>
      <i className="ri-menu-line menu" onClick={() => toggleMenu()}></i>

      <ul className="left menu-closed">
          <li><Link to="/" onClick={e => goHome(e)}>Home</Link></li>
          <li><Link to="/" onClick={e => styleNavLink(e)}>About us</Link></li>
          <li><Link to="/shop" onClick={e => styleNavLink(e)}>Shop</Link></li>
          <li><Link className="signup-m">Sign up</Link></li>
      </ul>

      <h1 className="logo">Timbushop</h1>
      
      <div className="right">
          <i className="ri-search-line"></i>
          <Link to="cart"><i className="ri-shopping-cart-2-line"></i></Link>
          <Link to="/" className="signup">Sign up</Link>
      </div>
  </nav>
);
}

export default Navbar;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// import { Link } from 'react-router-dom' ;


// const Header = () => {
//     return (

//       <nav>
//             {/* <i className="ri-menu-line menu" onClick={() => toggleMenu()}></i> */}

//             <div className="menu-icon">
//              <FontAwesomeIcon icon={faBars} />
//           </div>
          

//             <ul className="left-menu">
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li><span>Shop</span></li>
//                 <li>Sign up</li>
//             </ul>

//             <h1 className="nav-brand">Timbushop</h1>
            
//             <div className="right-icons">
//             <Link to="/AddToCart" className="Link">  <FontAwesomeIcon icon= {faSearch} /></Link>

//        <Link to="/ShoppingCart" className="Link"><FontAwesomeIcon icon={faShoppingCart} /> </Link>
//      </div>     <button className="signup-button">Sign Up</button>
                {/* <i className="ri-search-line"></i>
                <Link to="cart"><i className="ri-shopping-cart-2-line"></i></Link>
                <Link to="/" className="signup">Sign up</Link> */}
            
        // </nav>
      //   <nav className="navbar">
      //   <div className="navbar-container">
      //     <div className="menu-icon">
      //       <FontAwesomeIcon icon={faBars} />
      //     </div>
          
      //     <div className="navbar-links">
            
      //       <a href="#home">
      //           <Link to="/">Home</Link>
      //           </a>
      //       <a href="#about">
      //           <Link to="/">About us</Link>
      //           </a>
      //       <a href="#shop">
      //           <Link to="/"><span>Shop</span></Link></a>
      //     </div>
      //     <div className="navbar-brand">TimbuShop</div>
      //     <div className="navbar-icons">
      //     <Link to="/AddToCart" className="Link">  <FontAwesomeIcon icon= {faSearch} /></Link>

      //       <Link to="/ShoppingCart" className="Link"><FontAwesomeIcon icon={faShoppingCart} /> </Link>
      //     </div>
      //     <button className="signup-button">Sign Up</button>
      //   </div>
      // </nav>
   
  
  
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
  