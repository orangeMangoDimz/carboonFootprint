import React, { useState } from 'react';
import './Topbar.css';
import Logo from '../Assets/Left Side.png';
import { Container } from 'react-bootstrap';

function Topbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className={`shadow-sm Topbar ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
      <div className="img-container">
        <a href="#article-picture">
          <img src={Logo} alt="logo"/>
        </a>
      </div>
      <div className={`links-container ${showMobileMenu ? 'show' : ''}`} onClick={closeMobileMenu}>
        <ul className={`all-links ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
          <li><a href="#calc" style={{ fontSize: '1.2rem' }}>Calculator</a></li>
          <li><a href="#navigation" style={{ fontSize: '1.2rem' }}>Navigation</a></li>
          <li><a href="#about-us" style={{ fontSize: '1.2rem' }}>About</a></li>
        </ul>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <div className={`bar ${showMobileMenu ? 'close' : ''}`}></div>
        <div className={`bar ${showMobileMenu ? 'close' : ''}`}></div>
        <div className={`bar ${showMobileMenu ? 'close' : ''}`}></div>
      </div>
    </div>
  );
}

export default Topbar;
