import './MainPage.scss';
import dataCV from '../../dataCV.json';
import { Route, Routes } from 'react-router-dom';
import dataProjects from '../../dataProjects.json';
// import ResumePage from '../../pages/ResumePage/ResumePage';
import ResumeItem from '../../components/ResumeItem/ResumeItem';
// import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { yearsArraySorted } from '../../utilities/helper/helper';
import React from 'react';
import ContactPage from '../../pages/ContactPage/ContactPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import Spinner from '../../components/Spinner/Spinner';

// have a button that takes you to a crazy page (crazy art)
// standardize all the div classes in Project, Resume, Contact, Skills
// WTF do I put on the blank section?

const MainPage = (): JSX.Element => {
  const dataCVSliced = dataCV.slice(2);
  const dataArrayMapped = dataCVSliced.map((item) => item.list);
  const dataArrayMerged = dataArrayMapped.flat(1);
  const dataArraySorted = dataArrayMerged.sort((a: any, b: any) => b.header - a.header);

  const ProjectsPage = React.lazy(() => import('../../pages/ProjectsPage/ProjectsPage'));
  const ResumePage = React.lazy(() => import('../../pages/ResumePage/ResumePage'));

  return (
    <main className="main-container" id="main-content">
      <Routes>
        <Route path="/" index element={<AboutPage />} />
        <Route
          path="projects"
          element={
            <React.Suspense fallback={<Spinner />}>
              <ProjectsPage data={dataProjects} children={<ProjectItem data={dataProjects} />} />
            </React.Suspense>
          }
        />
        <Route
          path="resume"
          element={
            <React.Suspense fallback={<Spinner />}>
              <ResumePage
                data={yearsArraySorted}
                children={<ResumeItem data={dataArraySorted} />}
              />
            </React.Suspense>
          }
        />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
};

export default MainPage;
