import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import ContactButton from "../Contact/ContactButton";
import { download } from "../../utils/download";
import "./Navbar.css";

// Basic fixed navbar
const Navbar = () => {
  const history = useHistory();
  const [navbar, setNavbar] = useState(false);

  // Make navbar smaller on scroll down
  const changeBackground = () => {
    if (window.scrollY >= 75) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // Send to top of page if on homepage, otherwise redirect to homepage
  const toTop = () => {
    const urlPath = window.location.pathname;
    if (urlPath === "/" || urlPath === "/#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      history.push("/");
    }
  };

  return (
    <React.Fragment>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div>
          <button onClick={toTop} className="logo-btn">
            LL
          </button>
        </div>
        <div className="buttons">
          <a onClick={download} className="nav-link" href="#">
            CV
          </a>
          <ContactButton buttonText={"Contact"} />
        </div>
        <HamburgerMenu />
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
