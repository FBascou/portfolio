import './MainPage.scss'
import HeadingTwo from '../../components/HeadingTwo/HeadingTwo'
import HeadingThree from '../../components/HeadingThree/HeadingThree'
import Box from '../../components/Box/Box'
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage'

const MainPage = (): JSX.Element => {
  return (
    <div className="main-container">
      <header className="header-container">
        <div className="header-content">
          <div className="header-title">
            <h1>
              Hi, I'm{' '}
              <span id="header-span" className="header-span">
                Felipe
              </span>
            </h1>
          </div>
          {/* <div className="header-subtitle">
            <HeadingTwo title="Frontend Software Developer" />
          </div> */}
        </div>
        <nav>
          <ul className="navbar">
            <li>
              <h4>Projects</h4>
            </li>
            <li>
              <h4>Resume</h4>
            </li>
            <li>
              <h4>Contact</h4>
            </li>
            <li>
              <h4>LinkedIn</h4>
            </li>
            <li>
              <h4>Github</h4>
            </li>
            <li>
              <h4>Dark Mode</h4>
            </li>
          </ul>
        </nav>
      </header>
      <section className="about-container">
        <div className="section-content">
          <h4>Looking to work on projects with Javascript, Typescript and React</h4>
        </div>
      </section>
      <section className="skills-container">
        <div className="section-title">
          <HeadingTwo title="Skills" />
        </div>
        <div className="section-content">
          <div className="skill-section">
            <div className="skill-title">
              <HeadingThree title="Frontend" />
            </div>
            <div className="skill-content">
              <ul>
                <li>
                  <Box item={'Javascript'} />
                </li>
                <li>
                  <Box item={'Typescript'} />
                </li>
                <li>
                  <Box item={'React'} />
                </li>
                <li>
                  <Box item={'HTML'} />
                </li>
                <li>
                  <Box item={'CSS'} />
                </li>
                <li>
                  <Box item={'SASS'} />
                </li>
              </ul>
            </div>
          </div>
          <div className="skill-section">
            <div className="skill-title">
              <HeadingThree title="Backend" />
            </div>
            <div className="skill-content">
              <ul>
                <li>
                  <Box item={'Python 3'} />
                </li>
                <li>
                  <Box item={'MySQL'} />
                </li>
                <li>
                  <Box item={'MongoDB'} />
                </li>
              </ul>
            </div>
          </div>
          <div className="skill-section">
            <div className="skill-title">
              <HeadingThree title="Tools" />
            </div>
            <div className="skill-content">
              <ul>
                <li>
                  <Box item={'GIT'} />
                </li>
                <li>
                  <Box item={'JIRA'} />
                </li>
                <li>
                  <Box item={'Salesforce'} />
                </li>
                <li>
                  <Box item={'Figma'} />
                </li>
                <li>
                  <Box item={'AdobeXD'} />
                </li>
              </ul>
            </div>
          </div>
          <div className="skill-section">
            <div className="skill-title">
              <HeadingThree title="Languages" />
            </div>
            <div className="skill-content">
              <ul>
                <li>
                  <Box item={'English (Native)'} />
                  {/* <IconSkills icon={gb} /> */}
                </li>
                <li>
                  <Box item={'Spanish (Native)'} />
                  {/* <IconSkills icon={es} /> */}
                </li>
                <li>
                  <Box item={'French (Fluent)'} />
                  {/* <IconSkills icon={fr} /> */}
                </li>
                <li>
                  <Box item={'Chinese (Intermediate)'} />
                  {/* <IconSkills icon={cn} /> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-container">
        <div className="projects">
          <div className="section-content">
            <ProjectsPage />
          </div>
        </div>
        <div className="resume">
          {/* <div className="section-content">
            <div className="resume-section">
              <div className="resume-title">
                <h2>Work Experience</h2>
              </div>
              <div className="resume-content"></div>
            </div>
            <div className="resume-section">
              <div className="resume-title">
                <h2>Education</h2>
              </div>
              <div className="resume-content"></div>
            </div>
            <div className="resume-section">
              <div className="resume-title">
                <h2>Volunteering</h2>
              </div>
              <div className="resume-content"></div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default MainPage
