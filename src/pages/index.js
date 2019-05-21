import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Ty Gooch" />
    <div className="home-container">
      <div className="home-text-container">
        <h1 style={{ textAlign: "center", padding: "0px", margin: "0px" }}>
          DEVELOPER
        </h1>
        <span className="home-text-container-location">SANTA BARBARA, CA</span>
        <div className="home-links">
          <div
            className="home-link"
            style={
              typeof window !== "undefined"
                ? window.innerWidth < 700
                  ? { fontWeight: "400" }
                  : null
                : null
            }
          >
            <AniLink
              to="/about"
              className="home-link-text"
              style={{ backgroundColor: "black", color: "white" }}
              fade
              exit={{
                length: 0.75,
              }}
              entry={{
                delay: 0.75,
              }}
            >
              LEARN MORE
            </AniLink>
          </div>
          <div
            className="home-link"
            style={
              typeof window !== "undefined"
                ? window.innerWidth < 700
                  ? { fontWeight: "400" }
                  : null
                : null
            }
          >
            <AniLink
              to="/portfolio"
              className="home-link-text"
              style={{ backgroundColor: "#cf000f" }}
              fade
              exit={{
                length: 0.75,
              }}
              entry={{
                delay: 0.75,
              }}
            >
              VIEW PORTFOLIO
            </AniLink>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
