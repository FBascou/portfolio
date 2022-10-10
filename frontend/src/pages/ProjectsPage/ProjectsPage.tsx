import dataProjects from '../../dataProjects.json'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import './ProjectsPage.scss'

const ProjectsPage = (): JSX.Element => {
  return (
    <div className="projects-container">
      {dataProjects.map((item) => (
        <ProjectItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ProjectsPage
