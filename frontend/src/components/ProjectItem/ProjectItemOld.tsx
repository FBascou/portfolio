import './ProjectItem.scss'
import HeadingThree from '../HeadingThree/HeadingThree'
import { ProjectItemInterface } from '../../utilities/interfaces/projects-item.interface'
import Box from '../Box/Box'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

const ProjectItemOld = ({
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
  // should I add the image/media before the project content?
  return (
    <div className="project-item-container">
      <div className="project-header">
        <div className="project-title">
          <h4>{name}</h4>
        </div>
        <div className="project-details-container" onClick={toggleDetails}>
          {showDetails ? (
            <Box color="purple" item={<ExpandLessIcon fontSize="large" />} />
          ) : (
            <Box color="purple" item={<ExpandMoreIcon fontSize="large" />} />
          )}
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
                    <Box color="purple" item={item} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-section project-tech">
              <HeadingThree title="Tech" />
              <ul className="project-list-ul">
                {tech?.map((item) => (
                  <li key={item} className="project-list-item">
                    <Box color="purple" item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="project-column project-media">
            <div className="project-links">
              <a target="_blank" href={github} className="project-url">
                Github
              </a>
              <a target="_blank" href={url} className="project-url">
                Website
              </a>
            </div>
            <img className="project-img" src={media} alt={name} />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ProjectItemOld
