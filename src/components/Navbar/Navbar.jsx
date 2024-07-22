import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import open from "../../assets/images/open.svg";
import close from "../../assets/images/close.svg";
import "../css/navbar.css"


function Navbar() {
  const[isOpen,setopen] = useState(false)
function toggleMenu(){
  setopen(!isOpen);
}

  return (
    <header className="nav-wrapper">
      <nav className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="nav-logo" />
        </div>
        <ul  className={`links-container ${isOpen ? "open" : ""}`}> 
          <li className="nav-link">Features</li>
          <li className="nav-link">Team</li>
          <li className="nav-link">Sign In</li>
        </ul>
        <div className="toggle-container" onClick={toggleMenu}>
          <img src={isOpen ? close : open}
          className={`${isOpen ? "close-icon" : "open-icon"}`} 
          alt={`${isOpen ? "close-icon" : "open-icon"}`}
           />
        </div>
      </nav>
      <div className={`mask ${isOpen ? "open" : ""}`}></div>
    </header>
  );
}

export default Navbar;
