import { useState } from 'react'
import dataProjects from '../../dataProjects.json'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import './ProjectsPage.scss'
import { ProjectsPageInterface } from 'utilities/interfaces/projects-page.interface'

const ProjectsPage = (): JSX.Element => {
  const [data, setData] = useState<ProjectsPageInterface[]>(dataProjects)

  return (
    <div className="projects-container">
      <div className="project-item-list">
        {data.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
