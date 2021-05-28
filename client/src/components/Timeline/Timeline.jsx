import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

// Element detailing past experience/education
const Timeline = () => {
  return (
    <React.Fragment>
      <div className="timeline-container">
        <div className="timeline-title">
          <h1>My Timeline</h1>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2010 - 2015"
            icon={
              <div className="icon-container">
                <i className="fas fa-school"></i>
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Bishop Thomas Grant School (KS4)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
            <p>
              <b>GCSE:</b>
            </p>
            <ul>
              <li>
                9 GCSEs at <b>A</b> and <b>A*</b> (including English and Maths)
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2015 - 2017"
            icon={
              <div className="icon-container">
                <i className="fas fa-school"></i>
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">
              Bishop Thomas Grant Sixth Form (KS5)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
            <p>
              <b>A-levels</b>:
            </p>
            <ul>
              <li>
                Biology (<b>A</b>)
              </li>
              <li>
                Chemistry (<b>A</b>)
              </li>
              <li>
                Maths (<b>A</b>)
              </li>
              <li>
                EPQ - <i>"Should the NHS be privatised"</i> (<b>A</b>)
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2020"
            icon={
              <div className="icon-container">
                <i className="fas fa-university"></i>
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">
              University of Bath
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Bath, UK</h4>
            <p>
              Bachelor of Science (Honours) in Computer Science (<b>2:1</b>)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            icon={
              <div className="icon-container">
                <i className="fas fa-briefcase"></i>
              </div>
            }
          >
            <h3 className="vertical-timeline-element-title">
              JP Morgan Chase (Virtual Internship)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Due to COVID lockdown I decided to expand my skill-set by taking
              part in a virtual internship. Tasks included: interfacing with a
              stock price data feeds, use of J.P. Morgan Chase frameworks and
              tools, and displaying data visually for traders using react.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--final"
            icon={
              <div className="icon-container">
                <i className="fas fa-question"></i>
              </div>
            }
          />
        </VerticalTimeline>
        <div className="black-line"></div>
      </div>
    </React.Fragment>
  );
};

export default Timeline;
