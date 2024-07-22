import React from "react";
import "../css/features.css";
import featuresData from "./Data";

function Features() {
   
  return (
    <div className="features-wrapper">
      <div className="features-container">
        {featuresData.map((feature) => {
           let featureClassName;
           if(feature.id === 1){featureClassName = "first"}
           if(feature.id === 2){featureClassName = "second"}
           if(feature.id === 3){featureClassName = "third"}
           if(feature.id === 4){featureClassName = "fourth"}  
          return (
            <div key={feature.id} className={`feature-item ${featureClassName}`}>
              <div className="feature-icon-container">
                <img src={feature.icon} alt={`${feature.title} icon`} 
                className={`feature-icon ${featureClassName}`} />
              </div>
              <section className={`feature-text-container ${featureClassName}`}>
                <h2 className={`feature-title ${featureClassName}`}>
                  {feature.title}
                </h2>
                <p className={`feature-parag ${featureClassName}`}>
                 {feature.parag}
                </p>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
