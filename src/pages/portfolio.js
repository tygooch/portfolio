import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

/* eslint-disable react/jsx-pascal-case */
import SEO from '../components/seo'
import ProjectCard from '../components/projectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './portfolio.css'

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
    imageFour: file(relativePath: { eq: "botShadow.png" }) {
      ...squareImage
    }
  }
`

const Portfolio = props => (
  <div className='content'>
    <SEO title='Portfolio' />
    {/* <h1>Featured Projects</h1> */}
    <h1 className='portfolio-header'>Featured Work</h1>
    <div className='featured-projects'>
      <div className='project'>
        <div className='project-image'>
          <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        </div>
        <div className='project-info'>
          <h2 className='project-title'>Amazon Giveaway Bot</h2>
          <div className='project-image-mobile'>
            <Img fluid={props.data.imageFour.childImageSharp.fluid} />
          </div>
          <div className='project-details'>
            Chrome extension built with vanilla JS and Webpack that automates
            entry into Amazon Giveaways. Features include CAPTCHA solving,
            customizable filters, real-time notifications, and support for
            multiple accounts. Bypasses client side validation to enter
            giveaways without fulfilling time intensive entry requirements.
          </div>
          {/* <div className="project-tags">
            <span>JS</span>
            <span>Webpack</span>
          </div> */}
          <div className='project-links'>
            <a
              href='https://github.com/tygooch/amazon-giveaway-bot'
              target='_blank'
              rel='noopener noreferrer'
              style={{ marginRight: '15px' }}
            >
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a
              href='https://github.com/tygooch/amazon-giveaway-bot'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={['far', 'external-link']} />
            </a>
          </div>
        </div>
      </div>
      <div className='project'>
        <div className='project-info'>
          <h2 className='project-title'>UCSB Map</h2>
          <div className='project-image-mobile'>
            <Img fluid={props.data.imageOne.childImageSharp.fluid} />
          </div>
          <div className='project-details'>
            Full stack web app built with React/Redux, Leaflet.js, Java Spring
            Boot, and MongoDB. Features a fully responsive UI, custom styled map
            tiles, an easy to use search tool, and interior floorplans to make
            finding rooms easier than ever. Integrates with UCSB online
            schedules via a chrome extension, allowing students to view class
            locations with one click.
          </div>
          <div className='project-links'>
            <a
              href='https://github.com/tygooch/ucsb-map'
              target='_blank'
              rel='noopener noreferrer'
              style={{ marginRight: '15px' }}
            >
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a
              href='https://ucsbmap.com' target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={['far', 'external-link']} />
            </a>
          </div>
        </div>
        <div className='project-image'>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
      </div>
    </div>

    <h1 className='portfolio-header'>Other Projects</h1>

    <div>
      <div className='other-projects'>
        <ProjectCard
          github='https://github.com/tygooch/iv-emergency-map'
          title='Isla Vista Emergency Map'
          description='Real time map of emergencies reported by Santa Barbara County
              Fire. Data is sourced from @SBCFireDispatch tweets.'
          tags={['React', 'Express', 'Google Maps API', 'Twitter API']}
        />

        <ProjectCard
          github='https://github.com/tygooch/pastebin-scraper'
          title='Pastebin Scraper'
          description='Scrapes the latest Pastebin submissions to find pastes matching a given pattern.'
          tags={['Express', 'Puppeteer', 'JS', 'MongoDB']}
        />
        <ProjectCard
          github='https://github.com/tygooch/amazon-account-creator'
          title='Amazon Account Creator'
          description='Puppeteer script that programatically creates Amazon Accounts. Features SMS account verification by linking accounts with a new Textnow number.'
          tags={['Express', 'Puppeteer', 'JS']}
        />
      </div>
    </div>
  </div>
)

/* eslint-enable react/jsx-pascal-case */
export default Portfolio
