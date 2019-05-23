import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import Icon from "./icon"
import logo from "../images/logo2.svg"
import "./header.css"

const Header = () => (
  <header className="header">
    <Link
      to="/"
      activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
      activeClassName="header-logo-active"
      className="header-logo"
      exit={{
        length: 0.75,
      }}
      entry={{
        delay: 0.75,
      }}
    >
      <img src={logo} alt="" />
    </Link>
    <div className="header-links">
      <Link
        to="/about/"
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="header-link-text">ABOUT</span>
      </Link>
      <Link
        to="/portfolio/"
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="header-link-text">PORTFOLIO</span>
      </Link>
      <Link
        to="/resume/"
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="header-link-text">RESUME</span>
      </Link>
      <Link
        to="/contact/"
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
      >
        <span className="header-link-text">CONTACT</span>
      </Link>
    </div>
    <div className="social-links">
      <a href="https://linkedin.com/in/tygooch" className="social-link">
        <Icon iconName="linkedin-in" size="1x" top="3px" />
      </a>
      <a href="https://github.com/tygooch" className="social-link">
        <Icon iconName="github" size="1x" />
      </a>
      {/* <a href="https://facebook.com/tybradleygooch" className="social-link">
          <Icon iconName="facebook-f" size="2x" />
        </a> */}
    </div>
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
