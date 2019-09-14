import React, { useState, useContext } from "react"
import { Link } from "gatsby"
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
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        closeMenu: () => setMenuOpenState(false),
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
        <Link to="/" className="header-logo" onClick={ctx.closeMenu}>
          <Logo
            id="headerLogoSVG"
            height="30px"
            className={ctx.isMenuOpen ? "alt" : ""}
          />
          {/* <span>tygooch</span> */}
        </Link>
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
          <Link to="/contact" className="header-link" activeClassName="active">
            contact
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
            <div onClick={ctx.toggleMenu}>
              <Link to="/about" className="menu-item" activeClassName="active">
                about
              </Link>
              <Link
                to="/portfolio"
                className="menu-item"
                activeClassName="active"
              >
                portfolio
              </Link>
              <Link to="/resume" className="menu-item" activeClassName="active">
                resume
              </Link>
              <Link
                to="/contact"
                className="menu-item"
                activeClassName="active"
              >
                contact
              </Link>
            </div>
          </Menu>
        </div>
      </header>
    </>
  )
}

export default Header
