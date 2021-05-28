import React from "react";
import Modal from "react-modal";
import ContactForm from "./ContactForm";
import "./ContactModal.css";

// Modal for containing contact form
Modal.setAppElement("#root");
const ContactModal = ({ contactOpen, setContactOpen }) => {
  const modalClose = () => {
    setContactOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        closeTimeoutMS={250}
        isOpen={contactOpen}
        onRequestClose={modalClose}
        className="contact-modal-background"
        overlayClassName="contact-modal-overlay"
      >
        <div className="left-side">
          <div className="left-title">
            <h2>Let's get in touch. </h2>
            <h4>Or contact me at:</h4>
          </div>
          <div className="contact-email">
            <i className="fas fa-envelope-open-text"></i>
            <a href="mailto: lucasloudon@gmail.com" target="_blank">
              lucasloudon@gmail.com
            </a>
          </div>
          <div className="contact-linkedin">
            <i className="fab fa-linkedin-in"></i>
            <a href="https://www.linkedin.com/in/lucasloudon" target="_blank">
              linkedin/lucasloudon
            </a>
          </div>
          <div className="contact-phone">
            <i className="fas fa-phone-alt"></i>
            +44 7501 944061
          </div>
        </div>
        <div className="right-side">
          <button className="close-container">
            <i className="far fa-times-circle" onClick={modalClose}></i>
          </button>

          <ContactForm />
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ContactModal;
