import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import "./footer.css"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="footer-links">
      <Link
        to="/about/"
        className="footer-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="footer-link-text">ABOUT</span>
      </Link>
      <Link
        to="/portfolio/"
        className="footer-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="footer-link-text">PORTFOLIO</span>
      </Link>
      <Link
        to="/resume/"
        className="footer-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="footer-link-text">RESUME</span>
      </Link>
      <Link
        to="/contact/"
        className="footer-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="footer-link-text">CONTACT</span>
      </Link>
    </div>
  </footer>
)

export default Footer
