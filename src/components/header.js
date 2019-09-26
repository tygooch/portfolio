import React, { useState, useContext } from "react"
import { Link, navigate } from "gatsby"
import { fallDown as Menu } from "react-burger-menu"
import "hamburgers/dist/hamburgers.min.css"

import Logo from "../assets/logoInline.svg"
import "./header.css"

const HeaderCtx = React.createContext()

const Header = () => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <HeaderCtx.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => {
          setMenuOpenState(!menuOpenState)

          document.body.setAttribute(
            "style",
            `overflow: ${!menuOpenState ? "hidden" : "auto"};
            `
          )
          document
            .querySelector("html")
            .setAttribute(
              "style",
              `overflow: ${!menuOpenState ? "hidden" : "auto"};`
            )
          document.querySelectorAll(".menu-item:not(.active)").forEach(el => {
            el.setAttribute(
              "style",
              `color: ${!menuOpenState ? "#fff" : "#000"};`
            )
          })
          if (document.querySelector(".menu-item.active")) {
            document
              .querySelector(".menu-item.active")
              .setAttribute(
                "style",
                `color: ${!menuOpenState ? "#ce2d2d" : "#000"};`
              )
          }
        },
        closeMenu: () => {
          setMenuOpenState(false)
          document.body.setAttribute(
            "style",
            "overflow: auto; position: static;"
          )
          document.querySelector("html").setAttribute("style", "overflow:auto;")
        },
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
      }}
    >
      <Navigation />
    </HeaderCtx.Provider>
  )
}

const Hamburger = () => {
  const ctx = useContext(HeaderCtx)
  return (
    <button
      id="hamburger"
      className={
        ctx.isMenuOpen
          ? "hamburger hamburger--collapse is-active"
          : "hamburger hamburger--collapse"
      }
      type="button"
      onClick={ctx.toggleMenu}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  )
}

const Navigation = () => {
  const ctx = useContext(HeaderCtx)

  return (
    <>
      <header className="header">
        <div className="header-logo" onClick={ctx.closeMenu} style={{ cursor: 'pointer' }}>
          <Logo
            id="headerLogoSVG"
            height="30px"
            className={ctx.isMenuOpen ? "alt" : ""}
            onClick={() => navigate("/")}
          />
        </div>
        <div className="header-links">
          <Link to="/about" className="header-link" activeClassName="active">
            about
          </Link>
          <Link
            to="/portfolio"
            className="header-link"
            activeClassName="active"
          >
            portfolio
          </Link>
          <Link to="/resume" className="header-link" activeClassName="active">
            resume
          </Link>
        </div>
        <div id="mobile-links">
          <Hamburger />
          <Menu
            id={"mobileMenu"}
            right
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            isOpen={ctx.isMenuOpen}
            onStateChange={state => ctx.stateChangeHandler(state)}
            disableAutoFocus
            width={"100vw"}
            bodyClassName={"body-menu-open"}
            customBurgerIcon={false}
            customCrossIcon={false}
            noOverlay
          >
            {/* <div onClick={ctx.toggleMenu}> */}
            <Link
              to="/about"
              className="menu-item"
              activeClassName="active"
              onClick={ctx.toggleMenu}
            >
              about
            </Link>
            <Link
              to="/portfolio"
              className="menu-item"
              activeClassName="active"
              onClick={ctx.toggleMenu}
            >
              portfolio
            </Link>
            <Link
              to="/resume"
              className="menu-item"
              activeClassName="active"
              onClick={ctx.toggleMenu}
            >
              resume
            </Link>
          </Menu>
        </div>
      </header>
    </>
  )
}

export default Header
