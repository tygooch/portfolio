import React from "react"

import SEO from "../components/seo"
import Layout from "../layouts"

import "./about.css"

const SecondPage = () => (
  <div className="about">
    <SEO title="About" />
    {/* <div className="about-header">HEY I'M TY</div> */}

    <h1 className="about-header">Background</h1>
    <div className="about-section">
      As a frontend developer, I straddle the border between engineering and
      design, combining the latest technologies with modern design standards to
      build sleek web apps. To ensure my work delivers a solid user experience,
      I focus on developing engaging, responsive interfaces with an emphasis on
      simplicity.
      <br />
      <br />
      I'm currently available for work and am actively seeking a software
      development role that will put my coding abilities to the test. If your
      team needs an open-minded problem solver with a strong background in
      JavaScript, I'm your guy.
    </div>

    <h1 className="about-header">Skills</h1>
    {/* <div className="about-section-text"> */}
    <div className="about-section">
      <ul className="skills-content">
        <li className="skills-column">
          <div className="skills-header">LANGUAGES</div>
          <div className="skills-list">
            <span>
              JavaScript (ES6)
              <br />
              Ruby
              <br />
              Java
              <br />
              HTML
              <br />
              CSS
            </span>
          </div>
        </li>

        <li className="skills-column">
          <div className="skills-header">TECHNOLOGIES</div>
          <div className="skills-list">
            <span>
              Node.js
              <br />
              React.js
              <br />
              Express.js
              <br />
              Leaflet.js
              <br />
              Aurelia.js
            </span>
          </div>
        </li>

        <li className="skills-column">
          <div className="skills-header">TOOLS</div>
          <div className="skills-list">
            <span>
              Git & GitHub
              <br />
              Google Maps API
              <br />
              Bash
              <br />
              Webpack
              <br />
            </span>
          </div>
        </li>

        <li className="skills-column">
          <div className="skills-header">MISCELLANEOUS</div>
          <div className="skills-list">
            <span>
              Adobe Illustrator
              <br />
              Sketch App
              <br />
              Mapbox Studio
              <br />
              GIS
            </span>
          </div>
        </li>
      </ul>
    </div>
    {/* </div> */}
    {/* <div className="about-section-container">
      <div className="about-section-content" />
    </div> */}
  </div>
)

export default SecondPage
