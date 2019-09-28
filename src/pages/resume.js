import React from 'react'
import { withPrefix } from 'gatsby'
import { PDFExport } from '@progress/kendo-react-pdf'
// import canvg from 'canvg'

/* eslint-disable react/jsx-pascal-case */
import SEO from '../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './resume.css'

class Resume extends React.Component {
  constructor () {
    super()
    this.state = {}
    // this.exportPDF = this.exportPDF.bind(this)
  }

  // exportPDF () {
  //   const canv = this.refs.canvas
  //   canv.getContext('2d')
  //   document.querySelectorAll('.resume-pdf svg').forEach(svg => {
  //     canvg(canv, svg.outerHTML)
  //     const domparser = new DOMParser()
  //     const imgString = domparser.parseFromString(
  //       `<img class="${svg.classList}" src="${canv.toDataURL('image/png')}" />`,
  //       'text/html'
  //     )
  //     svg.replaceWith(imgString.querySelector('img'))
  //   })
  //   this.resume.save()
  // }

  render () {
    const resumeContent = {
      experience: [
        {
          title: 'Software Engineer Intern',
          location: 'UCSB Enterprise Technology Services',
          date: 'May 2018 - Current',
          details: [
            'Responsible for leading frontend development on the Identity & Access Management team.',
            'Designed, implemented, & tested new features for web apps built with Aurelia.js & Spring MVC.',
            'Accomplishments include designing & deploying a brand new UI for UCSB\'s account management website, automating the build process between our back & frontend services, and designing a reusable component library to achieve consistency throughout our apps.'
          ]
        },
        {
          title: 'Frontend Software Engineer',
          location: 'Grassp Health',
          date: 'Sep 2018 - June 2019',
          details: [
            'Designed & developed new features for a web app built with React/Redux and Spring MVC.',
            'Worked closely with CEO & CFO to design a new user interface using Material-UI.',
            'Successfully released updated application as a Progressive Web App with support for service workers, push notifications, and offline support.'
          ]
        }
      ],
      projects: [
        {
          title: 'Amazon Giveaway Bot',
          subtitle: 'Chrome extension to win Amazon Giveaways',
          url: 'https://github.com/TyGooch/amazon-giveaway-bot',
          details: [
            'Built with vanilla JS and Webpack.',
            'Features include CAPTCHA solving, customizable filters, and support for multiple accounts.',
            'Bypasses client side validation to enter giveaways without fulfilling time intensive entry requirements.'
          ]
        },
        {
          title: 'UCSB Map',
          subtitle: 'Interactive map of the UCSB campus',
          url: 'https://github.com/TyGooch/ucsb-map',
          details: [
            'Built with React/Redux, Leaflet.js, Java Spring MVC, and MongoDB.',
            'Features a fully responsive UI, custom styled map tiles, an easy to use search tool, and interior floor plans to make finding rooms easier than ever.',
            'Integrates easily with UCSB online schedules via a chrome extension, allowing students to view classroom locations with one click.'
          ]
        },
        {
          title: 'Isla Vista Emergency Map',
          subtitle: 'Interactive map of real time emergencies',
          url: 'https://github.com/TyGooch/iv-emergency-map',
          details: [
            'Built with React/Redux, Express.js, Google Maps, and MongoDB.',
            'Streams live tweets from SB County Fire using the Twitter API.',
            'Converts addresses from tweet content into map markers using Google Maps API.'
          ]
        }
      ],
      skills: {
        LANGUAGES:
        [
          'JavaScript (ES6+)',
          'HTML, CSS',
          'Bash',
          'Java'
        ],
        FRAMEWORKS:
        [
          'React.js, Redux',
          'Express.js',
          'Aurelia.js',
          'Gatsby.js'
        ],
        'TOOLS & TECH':
      [
        'Node.js',
        'Webpack',
        'Leaflet.js',
        'Linux'
      ],
        'UI/UX':
        [
          'Adobe Illustrator',
          'Sketch App',
          'Material-UI',
          'Bootstrap'
        ]
      },
      education: [
        {
          title: 'UC Santa Barbara',
          subtitle: 'Computer Science Engineering / 2014 - 2019',
          details: [
            'Coursework focused on software development alongside data structures & algorithms.'
          ]
        }
      ]
    }

    return (
      <div className='resume'>
        <SEO title='Resume' />

        <div className='resume-container'>
          <a
            rel='noopener noreferrer'
            href={withPrefix('/TyGoochResume.pdf')}
            target='_blank'
            className='resume-download-button'
          >
            <FontAwesomeIcon icon='file-download' />
            <span>Download PDF</span>
          </a>
          <div className='resume-page'>
            <PDFExport
              paperSize='Letter'
              fileName='TyGoochResume.pdf'
              title='Ty Gooch'
              subject='Ty Gooch'
              keywords='Ty Gooch Resume React Javascript Java Python C++ Vue ReactJS Native VueJS Bootstrap CSS HTML HTML5 JQuery LaTeX NodeJS Node.js Node Git Flow  Router Redux'
              proxyURL='/save'
              forceProxy
              proxyTarget='_blank' rel='noopener noreferrer'
              ref={pdf => {
                this.resume = pdf
              }}
            >
              {/* <canvas ref='canvas' style={{ display: 'none' }} /> */}

              <div className='resume-pdf'>
                <div className='resume-header'>
                  <div className='resume-header-name'>Ty Gooch</div>
                  <ul className='resume-footer-links'>
                    <a href='tel:+18057056502' target='_blank' rel='noopener noreferrer'>
                      <li key='websiteLink'>
                        <FontAwesomeIcon icon={['fas', 'mobile-android-alt']} listItem />
                        <span>805-705-6502</span>
                      </li>
                    </a>

                    <a href='https://github.com/tygooch' target='_blank' rel='noopener noreferrer'>
                      <li key='githubLink'>
                        <FontAwesomeIcon icon={['fab', 'github-alt']} listItem />
                        <span>github.com/tygooch</span>
                      </li>
                    </a>

                    <a href='mailto:gooch.ty@gmail.com' target='_blank' rel='noopener noreferrer'>
                      <li key='emailLink'>
                        <FontAwesomeIcon icon={['fas', 'paper-plane']} listItem />
                        <span>gooch.ty@gmail.com</span>
                      </li>
                    </a>

                    <a href='https://tygoo.ch/linkedin' target='_blank' rel='noopener noreferrer'>
                      <li key='linkedInLink'>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} listItem />
                        <span>tygoo.ch/linkedin</span>
                      </li>
                    </a>

                    <li className='a' key='home' style={{ margin: 0 }}>
                      <FontAwesomeIcon icon={['fas', 'map-marker-alt']} listItem />
                      <span>Santa Barbara, CA</span>
                    </li>

                    <a href='https://tygooch.com' target='_blank' rel='noopener noreferrer'>
                      <li key='websiteLink'>
                        <FontAwesomeIcon icon={['far', 'window-alt']} listItem />
                        <span>tygooch.com</span>
                      </li>
                    </a>
                  </ul>
                </div>
                <div className='resume-body'>
                  <div className='resume-section-header'>
                    <span className='resume-section-header-number'>01.</span>
                    EMPLOYMENT HISTORY
                  </div>
                  <div className='resume-section'>
                    {resumeContent.experience.map(el => (
                      <div key={el.title}>
                        <div className='experience-title'>
                          <span>{el.title}</span>
                          <span className='experience-subtitle'>
                            {el.location} / {el.date}
                          </span>
                        </div>
                        <ul className='experience-details'>
                          {el.details.map(el => (
                            <li key={el}>{el}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className='resume-section-header'>
                    <span className='resume-section-header-number'>02.</span>
                    PROJECTS
                  </div>
                  <div className='resume-section'>
                    {resumeContent.projects.map(el => {
                      return (
                        <div key={el.title}>
                          <div className='experience-title'>
                            <a href={el.url} target='_blank' rel='noopener noreferrer'>
                              {el.title} - {el.subtitle}
                            </a>
                          </div>
                          <ul className='experience-details'>
                            {el.details.map(el => (
                              <li key={el}>{el}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>

                  <div className='resume-section-header'>
                    <span className='resume-section-header-number'>03.</span>
                    SKILLS
                  </div>
                  <div className='resume-section'>
                    <ul className='skills'>
                      {Object.keys(resumeContent.skills).map(el => {
                        return (
                          <ul key={el}>
                            <li className='experience-title'>{el}</li>
                            {resumeContent.skills[el].map(skill => (
                              <li key={skill}>{skill}</li>
                            ))}
                          </ul>
                        )
                      })}
                    </ul>
                  </div>

                  <div className='resume-section-header'>
                    <span className='resume-section-header-number'>04.</span>
                    EDUCATION
                  </div>
                  <div className='resume-section'>
                    {resumeContent.education.map(el => (
                      <div key={el.title}>
                        <div className='experience-title'>
                          <span>{el.title}</span>
                          <span className='experience-subtitle'>
                            {el.subtitle}
                          </span>
                        </div>
                        <ul className='experience-details'>
                          {el.details.map(el => (
                            <li key={el}>{el}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </PDFExport>
          </div>
        </div>
        <div className='resume-download'>
          {/* {process.env.NODE_ENV === 'development' && (
            <button
              onClick={this.exportPDF}
              style={{
                width: 50
              }}
            >
              <FontAwesomeIcon icon='download' />
              Save PDF
            </button>
          )} */}

        </div>
      </div>
    )
  }
}

/* eslint-enable react/jsx-pascal-case */
export default Resume
