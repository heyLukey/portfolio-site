import React from "react";
import { openLink } from "../../utils/openLink";
import "./Projects.css";

// Element containing information on personal projects
const Projects = () => {
  return (
    <React.Fragment>
      <div className="projects-background">
        <div className="projects-container">
          <div className="projects-title">
            <h1>Projects</h1>
            <h4>Here are some things I've worked on</h4>
          </div>
          <div className="thumbnail-container">
            <button
              className="project-image-container"
              onClick={() =>
                openLink(
                  "https://github.com/heyLukey/Inventory-Management-Refined"
                )
              }
            >
              <img
                className="project-image"
                src={process.env.PUBLIC_URL + "/images/myinventory.png"}
                alt="Inventory Project"
              />
              <div className="project-text-container">
                <div className="project-text">Inventory Manager</div>
              </div>
              <div className="overlay">
                <div className="overlay-text">
                  <p>
                    Created an inventory management application for use in a
                    jewelry workshop using the MERN stack.
                  </p>
                  <p>
                    Kitted out with order querying, deadline tracking, and QR
                    intergration.
                  </p>
                </div>
              </div>
            </button>
            <button
              className="project-image-container"
              onClick={() =>
                openLink(
                  "https://github.com/heyLukey/LSTM-Music-Generator-Final-Year-Project"
                )
              }
            >
              <img
                className="project-image"
                src={process.env.PUBLIC_URL + "/images/mymusic.png"}
                alt="Music Project"
              />
              <div className="project-text-container">
                <div className="project-text">LSTM Music Generator</div>
              </div>
              <div className="overlay">
                <div className="overlay-text">
                  <p>
                    My final year dissertation which uses a "Long Short-term
                    Recurrent Neural Network to Generate Human-like Music".
                  </p>
                  <p>
                    Utilises Keras Tensorflow to generate 'complex' pieces of
                    music based on a given dataset.
                  </p>
                </div>
              </div>
            </button>
            <button
              className="project-image-container"
              onClick={() => openLink("https://github.com/heyLukey/mySynth")}
            >
              <img
                className="project-image"
                src={process.env.PUBLIC_URL + "/images/mysynth.png"}
                alt="Synth Project"
              />
              <div className="project-text-container">
                <div className="project-text">Polyphonic Synthesizer</div>
              </div>
              <div className="overlay">
                <div className="overlay-text">
                  <p>
                    A usable polyphonic synthesizer in C++ using the JUCE
                    application framework.
                  </p>
                  <p>
                    Includes two oscillators, a variable filter, and a volume
                    envelope.
                  </p>
                </div>
              </div>
            </button>
            <button
              className="project-image-container"
              onClick={() =>
                openLink("https://github.com/heyLukey/Meme-Discord-Bot")
              }
            >
              <img
                className="project-image"
                src={process.env.PUBLIC_URL + "/images/mybot.png"}
                alt="Robot Project"
              />
              <div className="project-text-container">
                <div className="project-text">Meme Bot</div>
              </div>
              <div className="overlay">
                <div className="overlay-text">
                  <p>Discord bot made for my friend groups discord server.</p>
                  <p>
                    Reacts to peoples names when typed and sends unique messages
                    in reponse to keywords.
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
