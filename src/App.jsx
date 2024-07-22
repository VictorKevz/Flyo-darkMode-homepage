import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features.jsx/Features";
import CTA from "./components/CTA/CTA";
import Testimonial from "./components/Testimonial/Testimonial";
import Form from "./components/Form/Form";
import Footer from "./components/Footer.jsx/Footer";

function App() {

  
  return (
    <main>
      <div className={`outer-container`}>
        <div className="inner-container">
          <Hero/>
          <Features/>
          <CTA/>
          <Testimonial/>
          <Form/>
          <Footer/>
        </div>
      </div>
    </main>
  );
}

export default App;