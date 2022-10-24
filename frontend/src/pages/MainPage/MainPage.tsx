import './MainPage.scss'
import dataCV from '../../dataCV.json'
import dataProjects from '../../dataProjects.json'
import ResumePage from '../../pages/ResumePage/ResumePage'
import ResumeItem from '../../components/ResumeItem/ResumeItem'
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import SkillsPage from '../../pages/SkillsPage/SkillsPage'

// have a button that takes you to a crazy page (crazy art)

const MainPage = (): JSX.Element => {
  return (
    <div className="main-page-container">
      {/* <ProjectsPage data={dataProjects} component={<ProjectItem data={dataProjects} />} /> */}
      <ResumePage data={dataCV.slice(2)} component={<ResumeItem data={dataCV.slice(2)} />} />
    </div>
  )
}

export default MainPage
