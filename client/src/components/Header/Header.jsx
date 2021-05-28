import React from "react";
import Typical from "react-typical";
import "./Header.css";

// Header/Landing with auto-typing title
const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="header-title">
          <Typical
            steps={["Hey!", 1000, " My name is Lucas.", 1000]}
            loop={1}
            wrapper="h1"
          />
        </div>
        <div className="header-desc">
          Wannabe software engineer and a Computer Science graduate from the
          University of Bath.
        </div>
      </header>
      <div className="landing">
        <div className="landing-container">
          <img
            className="landing-image"
            src={process.env.PUBLIC_URL + "/images/sapiens.png"}
            alt=""
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
