// import { AniLink } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import Icon from "./icon"
import logo from "../images/logo2.svg"

const Header = ({ siteTitle }) => (
  <header className="header">
    <AniLink
      to="/"
      fade
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
    </AniLink>
    <div className="header-links">
      <AniLink
        to="/about"
        fade
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
        exit={{
          length: 0.75,
        }}
        entry={{
          delay: 0.75,
        }}
      >
        <span className="header-link-text">ABOUT</span>
      </AniLink>
      <AniLink
        to="/portfolio"
        fade
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
        exit={{
          length: 0.75,
        }}
        entry={{
          delay: 0.75,
        }}
      >
        <span className="header-link-text">PORTFOLIO</span>
      </AniLink>
      <AniLink
        to="/resume"
        fade
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
        exit={{
          length: 0.75,
        }}
        entry={{
          delay: 0.75,
        }}
      >
        <span className="header-link-text">RESUME</span>
      </AniLink>
      <AniLink
        to="/contact"
        fade
        className="header-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
        exit={{
          length: 0.75,
        }}
        entry={{
          delay: 0.75,
        }}
      >
        <span className="header-link-text">CONTACT</span>
      </AniLink>
    </div>
    <div className="social-links">
      <a href="https://github.com/tygooch" className="social-link">
        <Icon iconName="github" size="1x" />
      </a>
      <a href="https://linkedin.com/in/tygooch" className="social-link">
        <Icon iconName="linkedin-in" size="1x" top="3px" />
      </a>
      {/* <a href="https://facebook.com/tybradleygooch" className="social-link">
          <Icon iconName="facebook-f" size="2x" />
        </a> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
