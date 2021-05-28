import React from "react";
import "./Footer.css";

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer>
        <div id="footer-content">
          <div id="footer-tl">Copyright &#169; 2020-{thisYear}</div>
          <div id="footer-tr">Created by Lucas Loudon</div>
          <div id="footer-bl">
            <a id="gmail" href="mailto: lucasloudon@gmail.com" target="_blank">
              <i className="fas fa-envelope"></i>
            </a>
            <a id="github" href="https://github.com/heyLukey" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div id="footer-br">
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/lucasloudon"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              id="twitter"
              href="https://twitter.com/hey_Lukey_"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
