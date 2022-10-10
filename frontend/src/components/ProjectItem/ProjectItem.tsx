import './ProjectItem.scss'
import { ProjectItemInterface } from '../../utilities/interfaces/projects-item.interface'
import Box from '../Box/Box'

const ProjectItem = ({
  name,
  description,
  features,
  tech,
  github,
  url,
  media,
}: ProjectItemInterface): JSX.Element => {
  return (
    <div className="project-item-container" id={name}>
      <div className="project-item-title">
        <h4>{name}</h4>
      </div>
      <div className="project-item-overview">
        <div className="project-item-overview-section project-item-info">
          <div className="project-item-section">
            <div className="project-item-section-header">
              <h3>Description</h3>
            </div>
            <div className="project-item-section-content">
              <p>{description}</p>
            </div>
          </div>
          <div className="project-item-section">
            <div className="project-item-section-header">
              <h3>Features</h3>
            </div>
            <div className="project-item-section-content">
              <ul className="project-item-section-content">
                {features?.map((item) => (
                  <li key={item}>
                    <Box item={item} color="purple" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="project-item-section">
            <div className="project-item-section-header">
              <h3>Tech</h3>
            </div>
            <div className="project-item-section-content">
              <ul className="project-item-section-content">
                {tech?.map((item) => (
                  <li key={item}>
                    <Box item={item} color="purple" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="project-item-overview-section project-item-media">
          <div className="project-item-links">
            <a target="_blank" href={github} className="project-url">
              <p>Github</p>
            </a>
            <a target="_blank" href={url} className="project-url">
              <p>Website</p>
            </a>
          </div>
          <div className="project-item-img">
            <img className="project-img" src={media} alt={name} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
