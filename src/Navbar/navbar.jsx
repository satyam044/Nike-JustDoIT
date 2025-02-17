import React, { useState } from 'react'
import navLogo from '../Assets/NikeLogo.png';
import { RiMenu3Fill, RiMenu2Fill, RiMenu5Line } from "react-icons/ri";
import './navbar.css'

const navbar = () => {
  const [navEnter, setNavEnter] = useState(false);
  const [navClick, setNavClick] = useState(false);

  const toggleMenu = () => {
    setNavClick((prev) => !prev);
  };

  // if (navEnter) {

  // }

  return (
    <>
      <div className="navbar">
        <div className="navLogo"><img src={navLogo} /></div>
        <div className="navMenu" onMouseEnter={() => setNavEnter(true)} onMouseLeave={() => setNavEnter(false)} onClick={toggleMenu}>
          {navClick ? <RiMenu5Line /> : navEnter ? <RiMenu2Fill /> : <RiMenu3Fill />}
        </div>
        <div className={`navLinks ${navClick ? "navLinksClicked" : ""}`}>
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Shop</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default navbar