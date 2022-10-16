import './ProjectItem.scss'
import Box from '../Box/Box'

interface ProjectItemInterface {
  data: any[]
}

const ProjectItem = ({ data }: ProjectItemInterface): JSX.Element => {
  return (
    <>
      {data.map((item: any) => (
        <div className="project-item-container" key={item.id} id={item.header}>
          <div className="project-item-title">
            <h4>{item.name}</h4>
          </div>
          <div className="project-item-overview">
            <div className="project-item-overview-section project-item-info">
              <div className="project-item-section">
                <div className="project-item-section-header">
                  <h3>Description</h3>
                </div>
                <div className="project-item-section-content">
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="project-item-section">
                <div className="project-item-section-header">
                  <h3>Features</h3>
                </div>
                <div className="project-item-section-content">
                  <ul className="project-item-list">
                    {item.features.map((item: string) => (
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
                  <ul className="project-item-list">
                    {item.tech.map((item: string) => (
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
                <a target="_blank" href={item.github} className="project-url">
                  <p>Github</p>
                </a>
                <a target="_blank" href={item.url} className="project-url">
                  <p>Website</p>
                </a>
              </div>
              <div className="project-item-img">
                <img className="project-img" src={item.media} alt={item.name} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectItem
