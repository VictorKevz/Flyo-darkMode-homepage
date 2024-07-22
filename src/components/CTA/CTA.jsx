import React from "react";
import illustration from "../../assets/images/illustration-stay-productive.png";
import arrowIcon from "../../assets/images/icon-arrow.svg";
import "../css/cta.css";
function CTA() {
  return (
    <div className="cta-wrapper">
      <div className="cta-container">
        <div className="cta-image-container">
          <img src={illustration} alt="illustration" className="cta-img" />
        </div>
        <section className="cta-text-container">
          <h3 className="cta-title">Stay productive, wherever you are</h3>
          <p className="cta-parag one">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="cta-parag two">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <div className="cta-link-arrow-container">
            <a className="cta-link">See how Fylo works</a>
            <div className="arrow-wrapper">
              <img src={arrowIcon} alt="arrow icon" className="arrow-icon" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CTA;
