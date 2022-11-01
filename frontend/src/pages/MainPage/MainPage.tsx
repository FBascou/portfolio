import './MainPage.scss'
import dataCV from '../../dataCV.json'
import { Route, Routes } from 'react-router-dom'
import dataProjects from '../../dataProjects.json'
import ResumePage from '../../pages/ResumePage/ResumePage'
import ResumeItem from '../../components/ResumeItem/ResumeItem'
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import ContactPage from '../../pages/ContactPage/ContactPage'
import { yearsArraySorted } from '../../utilities/helper/helper'

// have a button that takes you to a crazy page (crazy art)
// Cannot scroll on ResumePage
// Have skills, etc, etc. boxes fade in sideways
// WTF do I put on the blank section?

const MainPage = (): JSX.Element => {
  const dataCVSliced = dataCV.slice(2)
  const dataArrayMapped = dataCVSliced.map((item) => item.list)
  const dataArrayMerged = dataArrayMapped.flat(1)
  const dataArraySorted = dataArrayMerged.sort((a: any, b: any) => b.header - a.header)

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
            <ResumePage data={yearsArraySorted} component={<ResumeItem data={dataArraySorted} />} />
          }
        />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default MainPage
