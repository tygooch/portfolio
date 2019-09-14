import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import Layout from "../components/layout"

import "./portfolio.css"

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
`

export const staticQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "ucsbMapIphoneImage.png" }) {
      ...squareImage
    }
    imageTwo: file(relativePath: { eq: "ivEmergencyDispatchImage.png" }) {
      ...squareImage
    }
    imageThree: file(relativePath: { eq: "ucsbMapMacImage.png" }) {
      ...squareImage
    }
    imageFour: file(relativePath: { eq: "amazonGiveawayBot.png" }) {
      ...squareImage
    }
  }
`

const Portfolio = props => (
  <div className="portfolio">
    <SEO title="Portfolio" />
    {/* <h1>Work</h1> */}
    <div className="project">
      <div className="project-image">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </div>
      <div className="project-info">
        <h1 className="project-title">UCSB Map</h1>
        <div className="project-image-mobile">
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div className="project-details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          inventore voluptate dicta dolorem cumque sit magnam ex magni minima,
          fugit quas repellendus quos, neque natus tempore blanditiis! Maiores,
          voluptates pariatur.
        </div>
        <div className="project-links">
          <a
            href="https://github.com/tygooch/ucsb-map"
            target="_blank"
            style={{ marginRight: "15px" }}
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href="https://ucsbmap.com" target="_blank">
            <FontAwesomeIcon icon={["far", "external-link"]} />
          </a>
        </div>
      </div>
    </div>
    <div className="project">
      <div className="project-info">
        <h1 className="project-title">Amazon Giveaway Bot</h1>
        <div className="project-image-mobile">
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        </div>
        <div className="project-details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          inventore voluptate dicta dolorem cumque sit magnam ex magni minima,
          fugit quas repellendus quos, neque natus tempore blanditiis! Maiores,
          voluptates pariatur.
        </div>
        <div className="project-links">
          <a
            href="https://github.com/tygooch/amazon-giveaway-bot"
            target="_blank"
            style={{ marginRight: "15px" }}
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            href="https://github.com/tygooch/amazon-giveaway-bot"
            target="_blank"
          >
            <FontAwesomeIcon icon={["far", "external-link"]} />
          </a>
        </div>
      </div>
      <div className="project-image">
        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      </div>
    </div>

    {/* <div className="portfolio-images">
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
    </div> */}
  </div>
)

export default Portfolio
