import React from "react"
import Header from "./src/components/header"
// import Transition from "./src/components/transition"
import Particles from "react-particles-js"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import "pathseg"

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <main
        className="main"
        style={{
          minHeight: `${window.innerHeight}px`,
        }}
      >
        <Particles
          className="particles-background"
          canvasClassName="particles-canvas"
          params={{
            fps_limit: 28,

            particles: {
              number: {
                value:
                  typeof window !== "undefined"
                    ? (window.innerWidth / 400) * 20
                    : 60,
                density: { enable: false, value_area: 400 },
              },
              color: { value: "#000000" },
              shape: { type: "circle" },
              opacity: { value: 0.1, random: false },
              size: { value: 0.1, random: false },
              line_linked: {
                enable: true,
                distance: 224,
                color: "#000000",
                opacity: 0.5,
                width: 0.32,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: true,
              },
            },
            retina_detect: true,
          }}
        />
        <Header />
        {element}
        {/* <Transition location={}>{element}</Transition> */}
        {/* <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnterTimeout={0}
          transitionLeaveTimeout={0}
        >
          {element}
        </ReactCSSTransitionGroup> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
