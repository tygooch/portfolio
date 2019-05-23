import React from "react"
import { withPrefix, Link } from "gatsby"
import Particles from "react-particles-js"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <>
    <SEO title="Ty Gooch" />
    <div className="home-container">
      <div className="home-text-container">
        {/* <h1 style={{ textAlign: "center", padding: "0px", margin: "0px" }}> */}
        {/* DEVELOPER */}
        {/* </h1> */}
        <span className="home-text-container-header">DEVELOPER</span>
        <span className="home-text-container-location">SANTA BARBARA, CA</span>
        <div className="home-links">
          <Link
            to="/about"
            className="home-link"
            fade
            exit={{
              length: 0.75,
            }}
            entry={{
              delay: 0.75,
            }}
          >
            {/* LEARN MORE */}
            <span className="home-link-text">LEARN MORE</span>
          </Link>

          <Link
            to="/portfolio"
            className="home-link"
            fade
            exit={{
              length: 0.75,
            }}
            entry={{
              delay: 0.75,
            }}
          >
            {/* VIEW PORTFOLIO */}
            <span className="home-link-text">VIEW PORTFOLIO</span>
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
