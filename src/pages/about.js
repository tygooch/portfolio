import React from 'react'

/* eslint-disable react/jsx-pascal-case */
import SEO from '../components/seo'

import './about.css'

const SecondPage = () => (
  <div className='content'>
    <SEO title='About' />
    {/* <div className="about-header">HEY I'M TY</div> */}

    <h1 className='about-header'>Background</h1>
    <div className='about-section'>
      I'm a software developer with a passion for UI/UX. My skillset includes
      React, Node.js, Express.js, Webpack, HTML, CSS, and multiple UI libraries
      such as Bootstrap and Material Design. I have 3 years of experience
      building full-stack web applications and am always experimenting with the
      latest technology.
    </div>
    {/* <div className="about-section">
      I'm currently available for work and am actively seeking a software
      development role that will put my coding abilities to the test. If your
      team needs an open-minded problem solver with a strong background in
      JavaScript, I'm your guy.
    </div> */}

    <h1 className='about-header'>Skills</h1>
    {/* <div className="about-section-text"> */}
    <div className='about-section'>
      <ul className='skills-content'>
        <li className='skills-column'>
          <div className='skills-header'>LANGUAGES</div>
          <div className='skills-list'>
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

        <li className='skills-column'>
          <div className='skills-header'>TECHNOLOGIES</div>
          <div className='skills-list'>
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

        <li className='skills-column'>
          <div className='skills-header'>TOOLS</div>
          <div className='skills-list'>
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

        <li className='skills-column'>
          <div className='skills-header'>MISCELLANEOUS</div>
          <div className='skills-list'>
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
/* eslint-enable react/jsx-pascal-case */
export default SecondPage
