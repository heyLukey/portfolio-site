import React, { useState } from "react";
import axios from "axios";
import ErrorNotice from "../ErrorNotice/ErrorNotice";
import "./ContactForm.css";

// Contact form for messaging
const ContactForm = () => {
  const [errorMsg, setErrorMsg] = useState(undefined);
  const [submitted, setSubmitted] = useState(false);

  // Send message as email via backend
  const postMe = (e) => {
    e.preventDefault(e);
    let toSubmit = {
      subject: e.target.subject.value,
      text: e.target.text.value,
    };
    axios
      .post("/email/send", toSubmit)
      .then((res) => {
        setErrorMsg(undefined);
        setSubmitted(true);
      })
      .catch((error) => {
        setErrorMsg(error.response.data.error);
      });
  };

  // Send another message
  const resetSubmitted = () => {
    setSubmitted(false);
  };

  return (
    <React.Fragment>
      <div className="form-container">
        {errorMsg && (
          <ErrorNotice errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
        )}
        {submitted ? (
          <div className="submit-success">
            <div className="success-container">
              <h3>
                Message sent!{" "}
                <span role="img" aria-label="thumpsup">
                  👍
                </span>
              </h3>
              <h4>I'll try and get back to you as soon as possible!</h4>
              <p onClick={resetSubmitted}>Send another?</p>
            </div>
          </div>
        ) : (
          <form className="form-contact" onSubmit={postMe}>
            <input
              id="subject"
              type="text"
              placeholder="SUBJECT"
              maxLength="64"
            />
            <textarea
              id="text"
              placeholder="MESSAGE"
              maxLength="16384"
            ></textarea>
            <button className="submit-btn" type="submit">
              <i className="far fa-paper-plane"></i>
              SEND MESSAGE
            </button>
          </form>
        )}
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
