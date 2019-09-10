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
          details:
            "Currently leading frontend development on the Identity & Access Management team. Responsibilities include the design, implementation, and testing of new features for our web apps written in Aurelia JS alongside maintaining/updating legacy code to conform with latest standards. Accomplishments include releasing a major UI redesign, overhauling our dev environment to get HMR working between our Spring Boot templates and Webpack dev server, and rewriting legacy PHP services in Aurelia JS.",
        },
      ],
      projects: [
        {
          title: "UCSB Map",
          subtitle: "Interactive online map of the UCSB campus",
          url: "https://github.com/TyGooch/ucsb-map",
          details: [
            "Full stack web app built with React/Redux, Leaflet.js, Spring Boot, and MongoDB",
            "Features a fully responsive UI, custom styled map tiles, an easy to use search tool, and interior floorplans to make finding rooms easier than ever",
            "Integrates easily with UCSB online schedules via a chrome extension, allowing students to view classroom locations with one click",
          ],
        },
        {
          title: "Amazon Giveaway Bot",
          subtitle: "Open source JS script to automate Amazon Giveaway entries",
          url: "https://github.com/TyGooch/amazon-giveaway-bot",
          details: [
            "Uses JavaScript to scrape data from giveaway listings and interact with DOM elements",
            "Bypasses client-side validation to force entry into giveaways without fulfilling entry requirements",
            "Automatically solves CAPTCHAs to evade bot detection",
          ],
        },
        {
          title: "Isla Vista Emergency Map",
          subtitle: "Real time emergency information with live updates",
          url: "https://github.com/TyGooch/iv-emergency-map",
          details: [
            "Full stack web app built with React/Redux, Express.js, Google Maps, and MongoDB",
            "Streams live tweets from SB County Fire using the Twitter API which ",
            "Accounts for typos and invalid addresses before converting locations into map markers using Google Maps API",
          ],
        },
      ],
      skills: [
        "JavaScript, jQuery",
        "React.js, Redux",
        "Node.js,",
        "Webpack",
        "Aurelia.js",
        "Express.js",
        "MongoDB, PostgreSQL",
        "HTML, CSS, Sass",
        "Google Maps, Leaflet.js",
      ],
      education: [
        {
          title: "UC Santa Barbara - Computer Science Engineering (2019)",
          details:
            "Coursework focused on data structures and algorithms, software development, and discrete mathematics",
        },
      ],
    }

    return (
      <>
        <SEO title="Resume" />
        <div className="resume-container">
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
                    <li>https://tygoo.ch</li>
                    <li>gooch.ty@gmail.com</li>
                  </ul>
                </div>

                <div className="resume-body">
                  <div className="resume-section-header">
                    EMPLOYMENT HISTORY
                  </div>
                  {resumeContent.experience.map(el => (
                    <div>
                      <div className="experience-title">
                        {el.title} - {el.location}
                      </div>
                      <div className="experience-details">{el.details}</div>
                    </div>
                  ))}

                  <div className="resume-section-header">PROJECTS</div>
                  {resumeContent.projects.map(el => {
                    return (
                      <div>
                        <div className="experience-title">
                          {el.title} - {el.url}
                        </div>
                        <div className="experience-details">
                          {el.details.map(el => (
                            <div>{el}</div>
                          ))}
                        </div>
                      </div>
                    )
                  })}

                  <div className="resume-section-header">SKILLS</div>
                  {resumeContent.skills.map(el => (
                    <div>{el}</div>
                  ))}

                  <div className="resume-section-header">EDUCATION</div>
                  {resumeContent.education.map(el => (
                    <div>
                      <div>{el.title}</div>
                      <div>{el.details}</div>
                    </div>
                  ))}
                </div>

                <div className="resume-footer">
                  <ul className="resume-footer-links">
                    <a href="https://github.com/tygooch">
                      <li>
                        <FontAwesomeIcon icon={["fab", "github"]} listItem />
                        github.com/tygooch
                      </li>
                    </a>

                    <a href="https://github.com/tygooch">
                      <li>
                        <FontAwesomeIcon icon="globe" listItem />
                        tygooch.com
                      </li>
                    </a>

                    <a href="https://linkedin.com/in/tygooch">
                      <li>
                        <FontAwesomeIcon
                          icon={["fab", "linkedin-in"]}
                          listItem
                        />
                        linkedin.com/in/tygooch
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </PDFExport>
          </div>
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
            >
              <FontAwesomeIcon icon="download" />
              Click For PDF
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default Resume
