import Carousel from '../../components/Carousel/Carousel'
import './ProjectsPage.scss'

interface ProjectsPageInterface {
  data: any[]
  component?: JSX.Element
}

const ProjectsPage = ({ data, component }: ProjectsPageInterface): JSX.Element => {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <h2>Projects</h2>
      </div>
      <Carousel data={data} component={component} />
    </div>
  )
}

export default ProjectsPage
