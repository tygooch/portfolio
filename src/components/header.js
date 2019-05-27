import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Icon from "./icon"
import logo from "../images/logo2.svg"
import "./header.css"

const Header = () => (
  <header className="header">
    <Link to="/" className="header-logo">
      TY GOOCH
    </Link>
    <div className="header-links">
      <Link
        to="/about"
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="header-link-text">ABOUT</span>
      </Link>
      <Link
        to="/portfolio"
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="header-link-text">PORTFOLIO</span>
      </Link>
      <Link
        to="/resume"
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="header-link-text">RESUME</span>
      </Link>
      <Link
        to="/contact"
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="header-link-text">CONTACT</span>
      </Link>
    </div>
    <div className="social-links">
      <a href="https://linkedin.com/in/tygooch" className="social-link">
        {/* <span className="social-link-icon"> */}
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="1x" fixedWidth />
        {/* </span> */}
      </a>
      <a href="https://github.com/tygooch" className="social-link">
        {/* <span className="social-link-icon"> */}
        <FontAwesomeIcon icon={["fab", "github"]} size="1x" fixedWidth />
        {/* </span> */}
      </a>
      {/* <a href="https://facebook.com/tybradleygooch" className="social-link">
          <Icon iconName="facebook-f" size="2x" />
        </a> */}
    </div>
  </header>
)

export default Header
