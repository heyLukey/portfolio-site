import React from "react";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Timeline from "../Timeline/Timeline";
import "./PageHome.css";

// Home page
const PageHome = () => {
  return (
    <React.Fragment>
      <div id="page-home">
        <Header></Header>
        <Skills></Skills>
        <Projects></Projects>
        <Timeline></Timeline>
      </div>
    </React.Fragment>
  );
};

export default PageHome;
