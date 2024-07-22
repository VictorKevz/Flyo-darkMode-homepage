import React from "react";
import "../css/testimonial.css";
import quotes from "../../assets/images/bg-quotes.png";
import testimonialData from "./Data";

function Testimonial() {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-container">
        <div className={`testimonial-card-wrapper`}>
          {testimonialData.map((testimonial) => {
            let testimonialClassName = "";
            if (testimonial.id === 1) {
              testimonialClassName = "first";
            }
            if (testimonial.id === 2) {
              testimonialClassName = "second";
            }
            if (testimonial.id === 3) {
              testimonialClassName = "third";
            }
            return (
              <div
                key={testimonial.id}
                className={`testimonial-card ${testimonialClassName}`}
              >
                {testimonial.id === 1 && (
                  <img src={quotes} alt="quotes image" className="quotes" />
                )}

                <p className={`testimonial-parag ${testimonialClassName}`}>
                  {testimonial.parag}
                </p>
                <div className="testimonial-avatar-container">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} icon`}
                    className={`testimonial-avatar ${testimonialClassName}`}
                  />
                  <div className="testimonial-name-container">
                    <p className={`testimonial-name ${testimonialClassName}`}>
                      {testimonial.name}
                    </p>
                    <p className={`testimonial-role ${testimonialClassName}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
