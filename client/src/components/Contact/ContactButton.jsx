import React, { useState } from "react";
import ContactModal from "./ContactModal";
import "./ContactButton.css";

// Button for opening Contact Modal
const ContactButton = ({ buttonText }) => {
  const [contactOpen, setContactOpen] = useState(false);

  const openModal = () => {
    setContactOpen(true);
  };

  return (
    <React.Fragment>
      <ContactModal contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <button className="contact-btn" onClick={openModal}>
        {buttonText}
      </button>
    </React.Fragment>
  );
};

export default ContactButton;
