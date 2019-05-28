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
    return (
      <>
        <SEO title="Resume" />
        <div className="resume-container">
          <div className="resume-download">
            {false && process.env.NODE_ENV === "development" && (
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
                  <div className="resume-header-name">
                    TY <span className="resume-header-name-bold">GOOCH</span>
                  </div>
                  <ul className="resume-contact-info">
                    <li>
                      <FontAwesomeIcon icon="mobile-alt" listItem />
                      (805) 705-6502
                    </li>
                    <li>
                      <FontAwesomeIcon icon="envelope-open" listItem />
                      gooch.ty@gmail.com
                    </li>
                    <li>
                      <FontAwesomeIcon icon="home" listItem />
                      Santa Barbara, CA
                    </li>
                  </ul>
                </div>

                <div className="resume-body">
                  <div className="work-experience">
                    <div className="body-header">EXPERIENCE</div>
                    <ul className="list">
                      <li className="list-header">
                        Software Engineer Intern -{" "}
                        <span>
                          <span>
                            UCSB Enterprise Technology Services (2018 - present)
                          </span>
                        </span>
                        <ul className="sublist" id="workExperienceList">
                          <li>aaa</li>
                        </ul>
                        <ul className="sublist">
                          <li>
                            Built modules in Aurelia.js and vanilla JavaScript
                            for UCSB's Identity Management web applications
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <br />

                  <div className="projects">
                    <div className="body-header">PROJECTS</div>
                    <ul className="list">
                      <li className="list-header">
                        UCSBMap.com -{" "}
                        <span>Interactive online map of the UCSB campus</span>
                        <ul className="sublist">
                          <li>
                            Full stack web app built with Java Spring, MongoDB,
                            React/Redux and Leaflet.js
                          </li>
                          <li>
                            Used open source GIS resources to collect highly
                            accurate GeoJSON data of UCSB buildings and
                            interiors
                          </li>
                          <li>
                            Developed chrome extension UCSB Map For GOLD that
                            allows students to easily view their className
                            locations on ucsbmap.com with one click from their
                            online schedule
                          </li>
                        </ul>
                      </li>
                      <li>
                        Isla Vista Emergency Map -{" "}
                        <span>
                          Emergency dispatch visualization with live updates
                        </span>
                        <ul className="sublist">
                          <li>
                            Full stack JavaScipt web app built with Express.js,
                            Twitter API, and MongoDB on the backend and
                            React/Redux and Google Maps API on the frontend
                          </li>
                          <li>
                            Server side JavaScipt runs a Twitter livestream,
                            parsing tweets to store emergency data
                          </li>
                          <li>
                            Used Python to scrape 94,000 tweets, allowing users
                            to view all emergencies in Isla Vista since March
                            2009
                          </li>
                        </ul>
                      </li>
                      <li>
                        Caltrain Live -{" "}
                        <span>Map of real time CalTrain vehicle locations</span>
                        <ul className="sublist">
                          <li>
                            Uses JavaScript, jQuery, and Leaflet to add an
                            interactive layer to Google Maps tiles
                          </li>
                          <li>
                            Client side JavaScript determines approximate
                            geographic locations of trains
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <br />

                  <div className="skills">
                    <div className="body-header">SKILLS</div>
                    <ul className="list">
                      <li className="list-header">JavaScript (ES9), jQuery</li>
                      <li>Node.js</li>
                      <li>React.js, Redux</li>
                      <li>Express.js</li>
                      <li>Ruby, Ruby on Rails</li>
                      <li>MongoDB, PostgreSQL</li>
                      <li>Leaflet.js, Google Maps</li>
                      <li>GIS</li>
                      <li>HTML, CSS</li>
                    </ul>
                  </div>

                  <br />

                  <div className="education">
                    <div className="body-header">EDUCATION</div>
                    <ul className="list">
                      <li className="list-header">
                        UC Santa Barbara -{" "}
                        <span>Computer Science Engineering (2019)</span>
                        <ul className="sublist">
                          <li>
                            Pursing B.S. degree. Coursework includes Python/C++
                            programming, data structures and algorithms,
                            computer architecture, assembly language, and
                            discrete mathematics
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
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
        </div>
      </>
    )
  }
}

export default Resume
