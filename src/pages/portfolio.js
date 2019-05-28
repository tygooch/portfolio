import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

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
  }
`

const Portfolio = props => (
  <div className="portfolio">
    <SEO title="Portfolio" />
    {/* <h1>Work</h1> */}
    <div className="portfolio-images">
      <Img fluid={props.data.imageOne.childImageSharp.fluid} fadeIn={false} />
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
    </div>
  </div>
)

export default Portfolio
