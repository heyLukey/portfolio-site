import React from "react";
import "./Skills.css";

// Element containing columns detailing personal skills
const Skills = () => {
  return (
    <React.Fragment>
      <div className="skills-background">
        <div className="skills-title">
          <h1>I'm a...</h1>
        </div>
        <div className="skills-container">
          <div className="skills-buffer">
            <div className="skills-1">
              <div className="diamond">
                <div className="diamond-content">
                  <i className="fas fa-layer-group"></i>
                </div>
              </div>
              <div>
                <h2>Web Developer</h2>
                <div className="skills-description">
                  I use the internet a lot, so it's only natural I try to create
                  part of it!
                </div>
              </div>
              <div>
                <h4>Frontend frameworks:</h4>
                <p>
                  React.js
                  <br /> Angular.js
                </p>
              </div>
              <div>
                <h4>Backend frameworks:</h4>
                <p>Node.js (Express.js)</p>
              </div>
            </div>
          </div>
          <div className="skills-buffer middle">
            <div className="skills-2">
              <div className="diamond">
                <div className="diamond-content">
                  <i className="fas fa-file-code"></i>
                </div>
              </div>
              <div>
                <h2>Software Engineer</h2>
                <div className="skills-description">
                  Learning new technologies and discovering their applications
                  makes for fun projects.
                </div>
              </div>
              <div>
                <h4>Programming Languages:</h4>
                <p>
                  JavaScript,
                  <br /> Python,
                  <br /> C++,
                  <br /> HTML,
                  <br /> CSS
                </p>
              </div>
              <div>
                <h4>Technologies:</h4>
                <p>Keras, Tensorflow, MongoDB, Git, Microsoft Office</p>
              </div>
            </div>
          </div>
          <div className="skills-buffer">
            <div className="skills-3">
              <div className="diamond">
                <div className="diamond-content">
                  <i className="fas fa-icons"></i>
                </div>
              </div>
              <div>
                <h2>Hobbyist</h2>
                <div className="skills-description">
                  All work and no play makes Lucas a dull boy.
                </div>
              </div>
              <div>
                <h4>For fun:</h4>
                <p>
                  Music production (Ableton)
                  <br /> Videogames (Dota)
                  <br /> The gym (Sometimes)
                </p>
              </div>
              <div>
                <h4>Extracurriculars:</h4>
                <p>Model United Nations, BVGS team captain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
