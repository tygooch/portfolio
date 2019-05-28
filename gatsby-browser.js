import React from "react"
import Header from "./src/components/header"
import Footer from "./src/components/footer"
import Layout from "./src/components/layout"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <main
        className="main"
        style={{
          minHeight: `${window.innerHeight}px`,
        }}
      >
        <Header />
        {/* <div className="content"> */}
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {element}
        </ReactCSSTransitionGroup>
        {/* </div> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
