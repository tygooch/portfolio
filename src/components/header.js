import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Icon from "./icon"
import logo from "../images/logo2.svg"
import "./header.css"

const Header = () => (
  <>
    <header className="header-desktop">
      <Link to="/" className="header-logo">
        <span className="header-logo-text">TY GOOCH</span>
      </Link>
      <div className="header-links">
        <Link
          to="/about"
          className="header-link"
          activeStyle={{ color: "#ce2d2d", transition: "all 0.75s linear" }}
          activeClassName="active"
        >
          <span className="header-link-text">ABOUT</span>
        </Link>
        <Link
          to="/portfolio"
          className="header-link"
          activeStyle={{ color: "#ce2d2d", transition: "all 0.75s linear" }}
          activeClassName="active"
        >
          <span className="header-link-text">PORTFOLIO</span>
        </Link>
        <Link
          to="/resume"
          className="header-link"
          activeStyle={{ color: "#ce2d2d", transition: "all 0.75s linear" }}
          activeClassName="active"
        >
          <span className="header-link-text">RESUME</span>
        </Link>
        <Link
          to="/contact"
          className="header-link"
          activeStyle={{ color: "#ce2d2d", transition: "all 0.75s linear" }}
          activeClassName="active"
        >
          <span className="header-link-text">CONTACT</span>
        </Link>
      </div>
      <div className="social-links">
        <a href="https://linkedin.com/in/tygooch" className="social-link">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="1x" fixedWidth />
        </a>
        <a href="https://github.com/tygooch" className="social-link">
          <FontAwesomeIcon icon={["fab", "github"]} size="1x" fixedWidth />
        </a>
      </div>
    </header>
    <header className="header-mobile">
      <div className="header-mobile-top">
        <Link to="/" className="header-logo">
          <span className="header-logo-text">TY GOOCH</span>
        </Link>
        {/* <div className="social-links">
          <a href="https://linkedin.com/in/tygooch" className="social-link">
            <FontAwesomeIcon
              icon={["fab", "linkedin-in"]}
              size="1x"
              fixedWidth
            />
          </a>
          <a href="https://github.com/tygooch" className="social-link">
            <FontAwesomeIcon icon={["fab", "github"]} size="1x" fixedWidth />
          </a>
        </div> */}
      </div>
      <div className="header-links">
        <Link
          to="/about"
          className="header-link"
          activeStyle={{ color: "#ce2d2d", transition: "all 0.75s linear" }}
          activeClassName="active"
        >
          <span className="header-link-text">ABOUT</span>
        </Link>
        <Link
          to="/portfolio"
          className="header-link"
          activeStyle={{ color: "#ce2d2d", transition: "all 0.75s linear" }}
          activeClassName="active"
        >
          <span className="header-link-text">PORTFOLIO</span>
        </Link>
        <Link
          to="/resume"
          className="header-link"
          activeStyle={{ color: "#ce2d2d", transition: "all 0.75s linear" }}
          activeClassName="active"
        >
          <span className="header-link-text">RESUME</span>
        </Link>
        <Link
          to="/contact"
          className="header-link"
          activeStyle={{ color: "#ce2d2d", transition: "all 0.75s linear" }}
          activeClassName="active"
        >
          <span className="header-link-text">CONTACT</span>
        </Link>
      </div>
    </header>
  </>
)

export default Header
