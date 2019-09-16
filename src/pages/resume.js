import React from "react"
import { withPrefix } from "gatsby"
import canvg from "canvg"
import { PDFExport } from "@progress/kendo-react-pdf"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import "@fortawesome/fontawesome-pro/svgs/regular/mobile-alt.svg"

import "./resume.css"

class Resume extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.exportPDF = this.exportPDF.bind(this)
  }

  exportPDF() {
    let canv = this.refs.canvas
    canv.getContext("2d")
    document.querySelectorAll(".resume-pdf svg").forEach(svg => {
      canvg(canv, svg.outerHTML)
      let domparser = new DOMParser()
      let imgString = domparser.parseFromString(
        `<img class="${svg.classList}" src="${canv.toDataURL("image/png")}" />`,
        "text/html"
      )
      svg.replaceWith(imgString.querySelector("img"))
    })
    this.resume.save()
  }

  render() {
    const resumeContent = {
      experience: [
        {
          title: "Software Engineer Intern",
          location: "UCSB Enterprise Technology Services",
          date: "May 2018 - Current",
          details: [
            "Responsible for leading frontend development on the Identity & Access Management team.",
            "Designed, implemented, and tested new features for web apps built with Aurelia JS.",
            "Oversaw release of major UI redesign, overhauled our dev environment to get HMR working between Spring Boot templates and Webpack dev server, and rewrote legacy PHP services in Aurelia JS.",
          ],
        },
        {
          title: "Frontend Software Engineer",
          location: "Grassp Health",
          date: "Sep 2018 - June 2019",
          details: [
            "Developed new features for web apps built with React.js and Redux",
            "Updated legacy code to conform with latest standards in e-commerce and design",
            "Successfully released a new progressive web app to support customers running iOS and android",
          ],
        },
      ],
      projects: [
        {
          title: "Amazon Giveaway Bot",
          subtitle: "Chrome extension to win Amazon Giveaways",
          url: "https://github.com/TyGooch/amazon-giveaway-bot",
          details: [
            "Built with vanilla JS and Webpack",
            "Features include CAPTCHA solving, customizable filters, and support for multiple accounts",
            "Bypasses client side validation to enter giveaways without fulfilling time intensive entry requirements",
          ],
        },
        {
          title: "UCSB Map",
          subtitle: "Interactive map of the UCSB campus",
          url: "https://github.com/TyGooch/ucsb-map",
          details: [
            "Built with React/Redux, Leaflet.js, Spring Boot, and MongoDB",
            "Features a fully responsive UI, custom styled map tiles, an easy to use search tool, and interior floorplans to make finding rooms easier than ever",
            "Integrates easily with UCSB online schedules via a chrome extension, allowing students to view classroom locations with one click",
          ],
        },
        {
          title: "Isla Vista Emergency Map",
          subtitle: "Interactive map of IV emergencies",
          url: "https://github.com/TyGooch/iv-emergency-map",
          details: [
            "Built with React/Redux, Express.js, Google Maps, and MongoDB",
            "Streams live tweets from SB County Fire using the Twitter API",
            "Converts addresses from tweet content into map markers using Google Maps API",
          ],
        },
      ],
      skills: [
        "JavaScript, jQuery",
        "React.js, Redux",
        "Node.js",
        "Webpack",
        "Aurelia.js",
        "Express.js",
        "MongoDB, PostgreSQL",
        "HTML, CSS, Sass",
        "Google Maps, Leaflet.js",
      ],
      education: [
        {
          title: "University of California, Santa Barbara",
          subtitle: "Computer Science Engineering / 2014 - 2019",
          details: [
            "Coursework focused on data structures and algorithms, software development, and discrete mathematics",
          ],
        },
      ],
    }

    return (
      <>
        <SEO title="Resume" />
        <div className="resume-container">
          <div className="resume-download">
            {process.env.NODE_ENV === "development" && (
              <button
                onClick={this.exportPDF}
                style={{
                  width: 50,
                }}
              >
                <FontAwesomeIcon icon="download" />
                Save PDF
              </button>
            )}
            <a
              rel="noopener noreferrer"
              href={withPrefix("/TyGoochResume.pdf")}
              target="_blank"
              class="resume-download-button"
            >
              <FontAwesomeIcon icon="file-download" />
              <span>Download PDF</span>
            </a>
          </div>
          <div className="resume-page">
            <PDFExport
              paperSize={"Letter"}
              fileName="TyGoochResume.pdf"
              title="Ty Gooch"
              subject="Ty Gooch"
              keywords="Ty Gooch Resume React Javascript Java Python C++ Vue ReactJS Native VueJS Bootstrap CSS HTML HTML5 JQuery LaTeX NodeJS Node.js Node Git Flow  Router Redux"
              proxyURL="/save"
              forceProxy={true}
              proxyTarget="_blank"
              ref={pdf => {
                this.resume = pdf
              }}
            >
              <canvas ref="canvas" style={{ display: "none" }} />
              <div className="resume-pdf">
                <div className="resume-header">
                  <div className="resume-header-name">Ty Gooch</div>
                  <ul className="resume-contact-info">
                    <li>805-705-6502</li>
                    <li>gooch.ty@gmail.com</li>
                    <li>Santa Barbara, CA</li>
                  </ul>
                </div>

                <div className="resume-body">
                  <div className="resume-section-header">
                    <span className="resume-section-header-number">01.</span>
                    EMPLOYMENT HISTORY
                  </div>
                  <div className="resume-section">
                    {resumeContent.experience.map(el => (
                      <div>
                        <div className="experience-title">
                          <span>{el.title}</span>
                          <span className="experience-subtitle">
                            {el.location} / {el.date}
                          </span>
                        </div>
                        <ul className="experience-details">
                          {el.details.map(el => (
                            <li>{el}</li>
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
                    {resumeContent.projects.map(el => {
                      return (
                        <div>
                          <div className="experience-title">
                            {el.title} - {el.subtitle}
                            {/* <span>{el.title}</span>
                            <span className="experience-subtitle">
                              {el.subtitle}
                            </span> */}
                          </div>
                          <ul className="experience-details">
                            {el.details.map(el => (
                              <li>{el}</li>
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
                      {resumeContent.skills.map(el => (
                        <li>{el}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="resume-section-header">
                    <span className="resume-section-header-number">04.</span>
                    EDUCATION
                  </div>
                  <div className="resume-section">
                    {resumeContent.education.map(el => (
                      <div>
                        <div className="experience-title">
                          <span>{el.title}</span>
                          <span className="experience-subtitle">
                            {el.subtitle}
                          </span>
                        </div>
                        {/* <ul className="experience-details">
                          {el.details.map(el => (
                            <li>{el}</li>
                          ))}
                        </ul> */}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="resume-footer">
                  <ul className="resume-footer-links">
                    <a href="https://github.com/tygooch">
                      <li>
                        <FontAwesomeIcon icon={["fab", "github"]} listItem />
                        <span>github.com/tygooch</span>
                      </li>
                    </a>

                    <a href="https://tygooch.com">
                      <li>
                        <FontAwesomeIcon icon="globe" listItem />
                        <span>tygooch.com</span>
                      </li>
                    </a>

                    <a href="https://linkedin.com/in/tygooch">
                      <li>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} listItem />
                        <span>linkedin.com/in/tygooch</span>
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </PDFExport>
          </div>
        </div>
      </>
    )
  }
}

export default Resume
