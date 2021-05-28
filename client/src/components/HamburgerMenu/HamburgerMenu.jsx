import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { download } from "../../utils/download";
import ContactModal from "../Contact/ContactModal";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  // Disable scroll when menu is open to prevent button movement from nav
  useEffect(() => {
    const toggleScroll = () => {
      if (isNavOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "auto";
    };
    toggleScroll();
  }, [isNavOpen]);

  // Close menu when button disappears
  const closeMenu = () => {
    const match = window.matchMedia(`(max-width: 750px)`);
    if (!match.matches) {
      setNavOpen(false);
    }
  };
  window.addEventListener("resize", closeMenu);

  // Modal functionality
  const [contactOpen, setContactOpen] = useState(false);
  const openModal = () => {
    setNavOpen(false);
    setContactOpen(true);
  };

  return (
    <React.Fragment>
      <ContactModal contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <div className="hamburger-btn">
        <Hamburger toggled={isNavOpen} toggle={setNavOpen}></Hamburger>
      </div>
      <div className={isNavOpen ? "sidenav open" : "sidenav"}>
        <a onClick={openModal} className="sidenav-link">
          Contact
        </a>
        <a onClick={download} className="sidenav-link">
          CV
        </a>
      </div>
    </React.Fragment>
  );
};

export default HamburgerMenu;
