import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./projectCard.css"

const ProjectCard = ({ github, url, title, description, tags }) => (
  <div className="project-card">
    <div className="card-content">
      <div>
        <div className="card-header">
          <div className="project-icon">
            <FontAwesomeIcon icon={["fal", "folder-open"]} />
          </div>
          <div className="project-links">
            <a
              style={{ display: github ? "block" : "none" }}
              href={github}
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a
              style={{ display: url ? "block" : "none" }}
              href={url}
              target="_blank"
            >
              <FontAwesomeIcon icon={["far", "external-link"]} />
            </a>
          </div>
        </div>
        <h3 className="card-title">{title}</h3>
        <span className="card-description">{description}</span>
      </div>
      <span className="card-tags">
        {tags.map(tag => {
          return <span key={tag + title}>{tag}</span>
        })}
      </span>
    </div>
  </div>
)

ProjectCard.propTypes = {
  github: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}

export default ProjectCard
