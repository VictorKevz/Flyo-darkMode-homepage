import React from "react";
import illustration from "../../assets/images/illustration-intro.png";
import "../css/hero.css";
import Navbar from "../Navbar/Navbar";
function Hero() {
  return (
    <div className="hero-wrapper">
       <Navbar/> 
      <div className="hero-container">
        <div className="hero-image-container">
          <img src={illustration} alt="logo" className="hero-img" />
        </div>
        <section className="hero-text-container">
          <h1 className="hero-title">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="hero-parag">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <a className="hero-CTA link">Get Started</a>
        </section>
      </div>
    </div>
  );
}

export default Hero;
