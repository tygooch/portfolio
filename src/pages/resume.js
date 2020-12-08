import React from "react"
import { withPrefix } from "gatsby"
import { PDFExport } from "@progress/kendo-react-pdf"
// import canvg from 'canvg'

/* eslint-disable react/jsx-pascal-case */
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./resume.css"

class Resume extends React.Component {
  constructor() {
    super()
    this.state = {}
    // this.exportPDF = this.exportPDF.bind(this)
  }

  // exportPDF () {
  //   const canv = this.refs.canvas
  //   canv.getContext('2d')
  //   document.querySelectorAll('.resume-pdf svg').forEach(svg => {
  //     canvg(canv, svg.outerHTML)
  //     const domparser = new DOMParser()
  //     const imgString = domparser.parseFromString(
  //       `<img class="${svg.classList}" src="${canv.toDataURL('image/png')}" />`,
  //       'text/html'
  //     )
  //     svg.replaceWith(imgString.querySelector('img'))
  //   })
  //   this.resume.save()
  // }

  render() {
    const resumeContent = {
      experience: [
        {
          title: "Frontend Software Engineer",
          location: "CJ Affiliate",
          date: "Dec 2019 - Current",
          details: [
            "As a Frontend Software Engineer, I use React, Vanilla JS, and Hubl to develop custom solutions for the HubSpot CMS platform.",
            "Accomplishments include reducing business costs for data viz projects by developing a custom Tableau + HubSpot integration and increasing lead generation in foreign markets by improving support for localized web content.",
          ],
        },
        {
          title: "Software Engineer Intern",
          location: "UCSB Enterprise Technology Services",
          date: "May 2018 - Sep 2019",
          details: [
            "As a Software Engineer Intern, I designed & developed web apps for UCSB's Identity & Access Management portal using Aurelia.js & Spring MVC.",
            "Accomplishments include releasing a large scale UI redesign as the sole developer, automating build processes, and identifying & securing vulnerabilities in our codebase.",
          ],
        },
        {
          title: "Software Engineer",
          location: "Grassp Health",
          date: "Sep 2018 - June 2019",
          details: [
            "As a Software Engineer, I worked with stakeholders to design, develop, & deploy a new Progressive Web App for their platform using React + Redux and Spring MVC.",
          ],
        },
      ],
      projects: [
        {
          title: "Amazon Giveaway Bot",
          subtitle: "Chrome extension to win Amazon Giveaways",
          url: "https://github.com/TyGooch/amazon-giveaway-bot",
          details: [
            "Built with vanilla JS and Webpack.",
            "Bypasses Amazon's bot detection measures to quickly enter giveways and win free products.",
            "Features CAPTCHA solving, customizable filters, and UI designed for non-technical users.",
          ],
        },
        {
          title: "UCSB Map",
          subtitle: "Interactive map of the UCSB campus",
          url: "https://github.com/TyGooch/ucsb-map",
          details: [
            "Built with React/Redux, Leaflet.js, Java Spring MVC, and MongoDB.",
            "Features a fully responsive UI, custom map tiles, predictive search, and interior floor plans.",
          ],
        },
        {
          title: "Isla Vista Emergency Map",
          subtitle: "Interactive map of real time emergencies",
          url: "https://github.com/TyGooch/iv-emergency-map",
          details: [
            "Built with React/Redux, Express.js, Google Maps API, and MongoDB.",
            "Scrapes tweets from Santa Barbara County Fire using Twitter's API to display 911 responses in real time as map markers.",
          ],
        },
      ],
      skills: {
        LANGUAGES: ["JavaScript (ES6+)", "HTML, CSS", "SQL, NoSQL", "Java"],
        FRAMEWORKS: [
          "React.js, Redux",
          "Express.js",
          "Aurelia.js",
          "Gatsby.js",
        ],
        "TOOLS & TECH": ["Node.js", "Webpack", "Leaflet.js", "MongoDB"],
        "UI/UX": [
          "Adobe Illustrator",
          "Sketch App",
          "Material-UI",
          "Bootstrap",
        ],
      },
      education: [
        {
          title: "UC Santa Barbara",
          subtitle: "Computer Science Engineering / 2014 - 2019",
          details: [
            "Coursework focused on software development alongside data structures & algorithms.",
          ],
        },
      ],
    }

    return (
      <div className="resume">
        <SEO title="Resume" />

        <div className="resume-container">
          <div className="resume-page">
            <PDFExport
              paperSize="Letter"
              fileName="TyGoochResume.pdf"
              title="Ty Gooch"
              subject="Ty Gooch"
              keywords="Ty Gooch Resume React Javascript Java Python C++ Vue ReactJS Native VueJS Bootstrap CSS HTML HTML5 JQuery LaTeX NodeJS Node.js Node Git Flow  Router Redux"
              proxyURL="/save"
              forceProxy
              proxyTarget="_blank"
              rel="noopener noreferrer"
              ref={(pdf) => {
                this.resume = pdf
              }}
            >
              {/* <canvas ref='canvas' style={{ display: 'none' }} /> */}

              <div className="resume-pdf">
                <div className="resume-header">
                  <div className="resume-header-name">Ty Gooch</div>
                  <ul className="resume-footer-links">
                    <a
                      href="tel:+18057056502"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li key="websiteLink">
                        <FontAwesomeIcon
                          icon={["fas", "mobile-android-alt"]}
                          listItem
                        />
                        <span>805-705-6502</span>
                      </li>
                    </a>

                    <a
                      href="https://github.com/tygooch"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li key="githubLink">
                        <FontAwesomeIcon
                          icon={["fab", "github-alt"]}
                          listItem
                        />
                        <span>github.com/tygooch</span>
                      </li>
                    </a>

                    <a
                      href="mailto:gooch.ty@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li key="emailLink">
                        <FontAwesomeIcon
                          icon={["fas", "paper-plane"]}
                          listItem
                        />
                        <span>gooch.ty@gmail.com</span>
                      </li>
                    </a>

                    <a
                      href="https://tygoo.ch/linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li key="linkedInLink">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} listItem />
                        <span>tygoo.ch/linkedin</span>
                      </li>
                    </a>

                    <li className="a" key="home" style={{ margin: 0 }}>
                      <FontAwesomeIcon
                        icon={["fas", "map-marker-alt"]}
                        listItem
                      />
                      <span>Ventura, CA</span>
                    </li>

                    <a
                      href="https://tygooch.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li key="websiteLink">
                        <FontAwesomeIcon
                          icon={["far", "window-alt"]}
                          listItem
                        />
                        <span>tygooch.com</span>
                      </li>
                    </a>
                  </ul>
                </div>
                <div className="resume-body">
                  <div className="resume-section-header">
                    <span className="resume-section-header-number">01.</span>
                    EMPLOYMENT HISTORY
                  </div>
                  <div className="resume-section">
                    {resumeContent.experience.map((el) => (
                      <div key={el.title}>
                        <div className="experience-title">
                          <span>{el.title}</span>
                          <span className="experience-subtitle">
                            {el.location} / {el.date}
                          </span>
                        </div>
                        <ul className="experience-details">
                          {el.details.map((el) => (
                            <li key={el}>{el}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="resume-section-header">
                    <span className="resume-section-header-number">02.</span>
                    PROJECTS
                  </div>
                  <div className="resume-section">
                    {resumeContent.projects.map((el) => {
                      return (
                        <div key={el.title}>
                          <div className="experience-title">
                            <a
                              href={el.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {el.title} - {el.subtitle}
                            </a>
                          </div>
                          <ul className="experience-details">
                            {el.details.map((el) => (
                              <li key={el}>{el}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>

                  <div className="resume-section-header">
                    <span className="resume-section-header-number">03.</span>
                    SKILLS
                  </div>
                  <div className="resume-section">
                    <ul className="skills">
                      {Object.keys(resumeContent.skills).map((el) => {
                        return (
                          <ul key={el}>
                            <li className="experience-title">{el}</li>
                            {resumeContent.skills[el].map((skill) => (
                              <li key={skill}>{skill}</li>
                            ))}
                          </ul>
                        )
                      })}
                    </ul>
                  </div>

                  <div className="resume-section-header">
                    <span className="resume-section-header-number">04.</span>
                    EDUCATION
                  </div>
                  <div className="resume-section">
                    {resumeContent.education.map((el) => (
                      <div key={el.title}>
                        <div className="experience-title">
                          <span>{el.title}</span>
                          <span className="experience-subtitle">
                            {el.subtitle}
                          </span>
                        </div>
                        <ul className="experience-details">
                          {el.details.map((el) => (
                            <li key={el}>{el}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PDFExport>
          </div>
          <a
            rel="noopener noreferrer"
            href={withPrefix("/TyGoochResume.pdf")}
            target="_blank"
            className="resume-download-button"
          >
            <FontAwesomeIcon icon="file-download" />
            <span>Download PDF</span>
          </a>
        </div>
        {/* <div className="resume-download">
          {process.env.NODE_ENV === 'development' && (
            <button
              onClick={this.exportPDF}
              style={{
                width: 50
              }}
            >
              <FontAwesomeIcon icon='download' />
              Save PDF
            </button>
          )}
        </div> */}
      </div>
    )
  }
}

/* eslint-enable react/jsx-pascal-case */
export default Resume
