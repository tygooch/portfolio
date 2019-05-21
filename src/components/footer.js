// import { AniLink } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import React from "react"
import Icon from "./icon"
import logo from "../images/logo2.svg"

const Header = ({ siteTitle }) => (
  <footer className="footer">
    <div className="footer-links">
      <AniLink
        to="/about"
        fade
        className="footer-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
        exit={{
          length: 0.75,
        }}
        entry={{
          delay: 0.75,
        }}
      >
        <span className="footer-link-text">ABOUT</span>
      </AniLink>
      <AniLink
        to="/portfolio"
        fade
        className="footer-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
        exit={{
          length: 0.75,
        }}
        entry={{
          delay: 0.75,
        }}
      >
        <span className="footer-link-text">PORTFOLIO</span>
      </AniLink>
      <AniLink
        to="/resume"
        fade
        className="footer-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
        exit={{
          length: 0.75,
        }}
        entry={{
          delay: 0.75,
        }}
      >
        <span className="footer-link-text">RESUME</span>
      </AniLink>
      <AniLink
        to="/contact"
        fade
        className="footer-link"
        activeStyle={{ color: "#CF000F", transition: "all 0.75s linear" }}
        activeClassName="active"
        exit={{
          length: 0.75,
        }}
        entry={{
          delay: 0.75,
        }}
      >
        <span className="footer-link-text">CONTACT</span>
      </AniLink>
    </div>
  </footer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
