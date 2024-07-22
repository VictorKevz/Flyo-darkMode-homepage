import React, { useState } from "react";
import "../css/feedback.css"
import registered from "../../assets/images/registered.png";

function Feedback({onClose}) {
  return (
    <div className={`feedback-wrapper`}>
      <div className={`feedback-container`}>  
      <img src={registered} alt="check mark icon" className="feedback-icon" />
      <h5 className={`feedback-title`}>Thank You!</h5>
      <p className={`feedback-paragraph`}>Your email is registered!</p>

      <button className="link feedback" onClick={onClose}>
        Continue
      </button>
      </div>
    </div>
  );
}

export default Feedback;