import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT-3?</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#blog">Blog</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar-container'>
      <div className="gpt3__navbar">
        
        {/* Logo (Always Visible) */}
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="GPT3 Logo" />
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>

        {/* Sign-in and Sign-up Buttons */}
        <div className="gpt3__navbar-sign">
          <button className='gpt3__navbar-signin' type='button'>Log in</button>
          <button className='gpt3__navbar-signup' type='button'>Sign up</button>
        </div>

        {/* Toggle Button (Appears on Mobile) */}
        <div className="gpt3__navbar-menu">
          {toggleMenu 
            ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)} className="menu-icon" />
            : <RiMenu3Fill size={27} onClick={() => setToggleMenu(true)} className="menu-icon" />
          }
        </div>
      </div>

      {/* Mobile Menu (Only Visible When toggleMenu is True) */}
      <div className={`gpt3__navbar-menu_container ${toggleMenu ? 'show' : ''}`}>
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
