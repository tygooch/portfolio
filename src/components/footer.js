import { Link } from "gatsby"
import React from "react"
import "./footer.css"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="footer-links">
      <Link
        to="/about/"
        className="footer-link"
        activeStyle={{
          color: "#CF000F",
          background: "#000",
          transition: "color 0.75s linear",
        }}
        activeClassName="active"
      >
        <span className="footer-link-text">ABOUT</span>
      </Link>
      <Link
        to="/portfolio/"
        className="footer-link"
        activeStyle={{
          color: "#CF000F",
          background: "#000",
          transition: "color 0.75s linear",
        }}
        activeClassName="active"
      >
        <span className="footer-link-text">PORTFOLIO</span>
      </Link>
      <Link
        to="/resume/"
        className="footer-link"
        activeStyle={{
          color: "#CF000F",
          background: "#000",
          transition: "color 0.75s linear",
        }}
        activeClassName="active"
      >
        <span className="footer-link-text">RESUME</span>
      </Link>
      <Link
        to="/contact/"
        className="footer-link"
        activeStyle={{
          color: "#CF000F",
          background: "#000",
          transition: "color 0.75s linear",
        }}
        activeClassName="active"
      >
        <span className="footer-link-text">CONTACT</span>
        {/* <span className="footer-link-icon">
          <Icon iconName="fal envelope" size="1x" top="3px" color="#fff" />
        </span> */}
      </Link>
    </div>
  </footer>
)

export default Footer
