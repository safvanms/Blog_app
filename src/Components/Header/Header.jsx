// Header.jsx
import React, { useState } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { TbMenuDeep } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const style = {
    textDecoration: 'none',
  };

  return (
    <div className={`header ${isMenuOpen ? 'open' : ''}`}>
      <div className="header_left">
        <h1>Logo</h1>
      </div>
      <div className={`header_right ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen? <AiOutlineClose size={22}/>:<TbMenuDeep size={22}/>}
        </div>
        <ul>
          <NavLink to="/" style={style} activeClassName="active" onClick={toggleMenu}>
            <li>Blog</li>
          </NavLink>
          <NavLink to="/news" style={style} activeClassName="active" onClick={toggleMenu}>
            <li>News</li>
          </NavLink>
          <NavLink to="/about" style={style} activeClassName="active" onClick={toggleMenu}>
            <li>About</li>
          </NavLink>
          <NavLink to="/contact" style={style} activeClassName="active" onClick={toggleMenu}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
