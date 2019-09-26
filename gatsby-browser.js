import React from "react"
import Header from "./src/components/header"
import Particles from "react-particles-js"
import "pathseg"

let startX = 50

export const wrapPageElement = ({ element, props }) => {
  // console.log(props.location.state)
  if (!props.location.state) {
    props.location.state = {}
  }
  props.location.state.shouldAnimate = !(
    startX < 25 || startX > window.innerWidth - 25
  )
  return (
    <>
      <main
        id="outer-container"
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
      </main>
    </>
  )
}

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  // if (prevLocation)
  //   console.log(
  //     "TCL: onPreRouteUpdate -> prevLocation.state.shouldAnimate",
  //     prevLocation.state.shouldAnimate
  //   )
  // console.log(
  //   "TCL: onPreRouteUpdate -> location.state.shouldAnimate",
  //   location.state.shouldAnimate
  // )
  if (
    prevLocation &&
    !prevLocation.state.shouldAnimate &&
    location.state.shouldAnimate
  ) {
    prevLocation.state.shouldAnimate = true
    console.log("fix")
  }
  window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))
  startX = 50
}

export const onInitialClientRender = () => {
  var el = document.querySelector("body")
  el.addEventListener(
    "touchstart",
    function(e) {
      startX = e.changedTouches[0].pageX
    },
    false
  )
}

export const shouldUpdateScroll = () => {
  return false
}
