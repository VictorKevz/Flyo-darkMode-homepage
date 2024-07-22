import React, { useState } from "react";
import "../css/form.css";
import Feedback from "./Feedback";
function Form() {
  const [email, setEmail] = useState("");
  const [isValid, setvalid] = useState(true);
  const [showFeedback, setFeedback] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(e) {
    setEmail(e.target.value);
    setvalid(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !emailRegex.test(email)) {
      setvalid(false);
    } else {
      setFeedback(true);
    }
  }
  function closeFeedback() {
    setFeedback(false)
    setEmail("")
    setvalid(true)
  }
  return (
    <div className="form-wrapper">
      <section className="form-container">
        <h4 className="form-title">Get early access today</h4>
        <p className="form-parag">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email"></label>
            <input
              id="email"
              value={email}
              onChange={handleChange}
              placeholder="email@example.com"
              className={`${!isValid && "error-border"}`}
            />
            {!isValid && <span className="error-message">Please Enter a valid email address!</span>}
          </div>
          <div className="field">
            <button type="submit" className="link form-btn">Get Started For Free</button>
          </div>
        </form>
      </section>
      {showFeedback && <Feedback onClose={closeFeedback}/>}
    </div>
  );
}

export default Form;
