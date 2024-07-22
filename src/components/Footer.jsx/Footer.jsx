import React, { useState } from "react";
import "../css/footer.css";
import "../css/index.css"
import location from "../../assets/images/icon-location.svg";
import phone from "../../assets/images/icon-phone.svg";
import email from "../../assets/images/icon-email.svg";
import logo from "../../assets/images/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className={`footer-wrapper`}>
      <div className={`footer-container`}>
        <img src={logo} alt="check mark icon" className="footer-logo" />
        <div className="footer-inner-container">
          <div className="location-container">
            <img src={location} alt="location-icon" className="location-icon" />
            <p className="location-parag">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="contanct-container">
            <div className="phone-container">
              <img src={phone} alt="phone-icon" className="phone-icon" />
              <p className="phone-parag">+1-543-123-4567</p>
            </div>
            <div className="email-container">
              <img src={email} alt="email-icon" className="email-icon" />
              <p className="email-parag">example@fylo.com</p>
            </div>
          </div>
          <ul className="first-list-container">
            <li className="footer-link">About Us</li>
            <li className="footer-link">Jobs</li>
            <li className="footer-link">Press</li>
            <li className="footer-link">Blog</li>
          </ul>
          <ul className="second-list-container">
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">Terms</li>
            <li className="footer-link">Privacy</li>
          </ul>
          <div className="socials-container">
          <IconContext.Provider value={{ className: "react-icons" }}>
            <div className="icon-wrapper">
              {" "}
              <FaFacebookF />
            </div>
            <div className="icon-wrapper">
              <FaTwitter />
            </div>
            <div className="icon-wrapper">
              <FaInstagram />
            </div>
          </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
