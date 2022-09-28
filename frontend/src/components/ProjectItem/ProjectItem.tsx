import './ProjectItem.scss'
import HeadingThree from '../HeadingThree/HeadingThree'
import { ProjectItemInterface } from '../../utilities/interfaces/projects-item.interface'
import Box from '../../components/Box/Box'
import { MouseEventHandler, useState } from 'react'

const ProjectItem = ({
  name,
  description,
  features,
  tech,
  github,
  url,
  media,
}: ProjectItemInterface): JSX.Element => {
  const [showDetails, setShowDetails] = useState<boolean>(false)

  const toggleDetails: React.MouseEventHandler<HTMLElement> = (): void => {
    setShowDetails((showDetails) => !showDetails)
  }

  // add smooth animation when clicking show/hide details
  // hide all items when only one is selected
  return (
    <div className="project-item-container">
      <div className="project-header">
        <h4>{name}</h4>
        <div className="project-details-btn" onClick={toggleDetails}>
          {showDetails ? <p>Hide details -</p> : <p>Show details +</p>}
        </div>
      </div>
      {showDetails ? (
        <div className={`project-info`}>
          <div className="project-column project-overview">
            <div className="project-section project-description">
              <HeadingThree title="Description" />
              <p>{description}</p>
            </div>
            <div className="project-section project-features">
              <HeadingThree title="Features" />
              <ul className="project-list-ul">
                {features?.map((item) => (
                  <li key={item} className="project-list-item">
                    <Box item={item} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-section project-tech">
              <HeadingThree title="Tech" />
              <ul className="project-list-ul">
                {tech?.map((item) => (
                  <li key={item} className="project-list-item">
                    <Box item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="project-column project-media">
            <div className="project-links">
              <a target="_blank" href={github} className="project-url">
                Github
              </a>
              <a target="_blank" href={url} className="project-url">
                Website
              </a>
            </div>
            <img className="project-img" src={media} alt={name} />
          </div> */}
        </div>
      ) : null}
    </div>
  )
}

export default ProjectItem
