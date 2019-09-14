import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

import "./about.css"

const SecondPage = () => (
  <div className="about">
    <SEO title="About" />
    <div className="about-header">HEY I'M TY</div>

    <div className="about-section-container">
      <div className="about-section-content">
        <div className="about-section-header-container">
          <div>BACKGROUND</div>
        </div>
        <div className="about-section-text">
          <span>
            As a frontend developer, I straddle the border between engineering
            and design, combining the latest technologies with modern design
            standards to build sleek web apps. To ensure my work delivers a
            solid user experience, I focus on developing engaging, responsive
            interfaces with an emphasis on simplicity.
            <br />
            <br />
            I'm currently available for work and am actively seeking an
            internship that will put my JavaScript abilities to the test and
            help me become a better software engineer. If your team needs an
            open-minded problem solver with a strong background in JavaScript,
            I'm your guy.
          </span>
        </div>
      </div>
    </div>

    <div className="about-section-container">
      <div className="about-section-content">
        <div className="about-section-header-container">
          <div>SKILLS</div>
        </div>
        <div className="about-section-text">
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
              <div className="skills-header">FRAMEWORKS</div>
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
                  Ruby on Rails
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
                  Chrome DevTools
                </span>
              </div>
            </li>

            <li className="skills-column">
              <div className="skills-header">Miscellaneous</div>
              <div className="skills-list">
                <span>
                  GIS
                  <br />
                  Sketch
                  <br />
                  Mapbox Studio
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default SecondPage
