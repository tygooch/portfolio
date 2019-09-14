import React from "react"
import Header from "./src/components/header"
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
        {/* <Particles
          style={{
            position: "fixed",
            width: "100vw",
            height: "calc(90vh - 65px)",
            top: "65px",
            zIndex: -1,
          }}
          params={{
            fps_limit: 28,
            particles: {
              number: {
                value: 200,
                density: {
                  enable: false,
                },
              },
              color: { value: "#000000" },
              line_linked: {
                enable: true,
                distance: 30,
                opacity: 0.4,
                color: "#000000",
              },
              move: {
                speed: 1,
              },
              opacity: {
                anim: {
                  enable: true,
                  opacity_min: 0.05,
                  speed: 2,
                  sync: false,
                },
                value: 0.4,
              },
            },
            polygon: {
              enable: true,
              scale: 0.5,
              type: "inside",
              move: {
                radius: 10,
              },
              url: "/small-deer.2a0425af.svg",
              inline: {
                arrangement: "equidistant",
              },
              draw: {
                enable: true,
                stroke: {
                  color: "rgba(0, 0, 0, .2)",
                },
              },
            },
            retina_detect: false,
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  size: 6,
                  distance: 40,
                },
              },
            },
          }}
        /> */}
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
