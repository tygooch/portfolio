import React from "react"
import { Link } from "gatsby"

/* eslint-disable react/jsx-pascal-case */
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <div className="home">
    <div className="home-container">
      <SEO title="Software Developer" />
      <div className="home-text-container">
        <span className="home-text-container-header">DEVELOPER</span>
        <span className="home-text-container-location">VENTURA, CA</span>
        <div className="home-links">
          <Link to="/about" className="home-link">
            <span className="home-link-text">LEARN MORE</span>
          </Link>

          <Link to="/portfolio" className="home-link">
            <span className="home-link-text">VIEW PORTFOLIO</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
)
/* eslint-enable react/jsx-pascal-case */
export default IndexPage
