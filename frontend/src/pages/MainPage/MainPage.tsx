import './MainPage.scss'
import dataCV from '../../dataCV.json'
import { Route, Routes } from 'react-router-dom'
import dataProjects from '../../dataProjects.json'
import ResumePage from '../../pages/ResumePage/ResumePage'
import ResumeItem from '../../components/ResumeItem/ResumeItem'
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage'
import ProjectItem from '../../components/ProjectItem/ProjectItem'

// have a button that takes you to a crazy page (crazy art)

const MainPage = (): JSX.Element => {
  return (
    <div className="main-page-container">
      <Routes>
        <Route
          path="projects"
          index //not sure about this
          element={
            <ProjectsPage data={dataProjects} component={<ProjectItem data={dataProjects} />} />
          }
        />
        <Route
          path="resume"
          element={
            <ResumePage data={dataCV.slice(2)} component={<ResumeItem data={dataCV.slice(2)} />} />
          }
        />
      </Routes>
    </div>
  )
}

export default MainPage
