import './MainPage.scss'
import HeadingTwo from '../../components/HeadingTwo/HeadingTwo'
import HeadingThree from '../../components/HeadingThree/HeadingThree'
import Box from '../../components/Box/Box'
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'

// have a button that takes you to a crazy page (crazy art)

const MainPage = (): JSX.Element => {
  return (
    <div className="main-page-container">
      <Header />
      <main className="main-container">
        <section className="skills-container">
          <div className="section-title">
            <HeadingTwo title="Skills" />
          </div>
          <div className="section-content" id="skills-section">
            <div className="skill-section">
              <div className="skill-title">
                <HeadingThree title="Frontend" />
              </div>
              <div className="skill-content">
                <ul className="skill-list">
                  <li>
                    <Box color="blue" item={'Javascript'} />
                  </li>
                  <li>
                    <Box color="blue" item={'Typescript'} />
                  </li>
                  <li>
                    <Box color="blue" item={'React'} />
                  </li>
                  <li>
                    <Box color="blue" item={'HTML'} />
                  </li>
                  <li>
                    <Box color="blue" item={'CSS'} />
                  </li>
                  <li>
                    <Box color="blue" item={'SASS'} />
                  </li>
                  {/* <li>
                    <Box color='blue' item={'Styled-Components'} />
                  </li>
                  <li>
                    <Box color='blue' item={'MaterialUI'} />
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="skill-section">
              <div className="skill-title">
                <HeadingThree title="Tools" />
              </div>
              <div className="skill-content">
                <ul className="skill-list">
                  <li>
                    <Box color="blue" item={'Python 3'} />
                  </li>
                  <li>
                    <Box color="blue" item={'MySQL'} />
                  </li>
                  <li>
                    <Box color="blue" item={'MongoDB'} />
                  </li>
                  <li>
                    <Box color="blue" item={'GIT'} />
                  </li>
                  <li>
                    <Box color="blue" item={'JIRA'} />
                  </li>
                  <li>
                    <Box color="blue" item={'Salesforce'} />
                  </li>
                  <li>
                    <Box color="blue" item={'Figma'} />
                  </li>
                  <li>
                    <Box color="blue" item={'AdobeXD'} />
                  </li>
                  <li>
                    <Box color="blue" item={'Postman'} />
                  </li>
                </ul>
              </div>
            </div>
            <div className="skill-section">
              <div className="skill-title">
                <HeadingThree title="Languages" />
              </div>
              <div className="skill-content">
                <ul className="skill-list">
                  <li>
                    <Box color="blue" item={'English (Native)'} />
                    {/* <IconSkills icon={gb} /> */}
                  </li>
                  <li>
                    <Box color="blue" item={'Spanish (Native)'} />
                    {/* <IconSkills icon={es} /> */}
                  </li>
                  <li>
                    <Box color="blue" item={'French (Fluent)'} />
                    {/* <IconSkills icon={fr} /> */}
                  </li>
                  <li>
                    <Box color="blue" item={'Chinese (Intermediate)'} />
                    {/* <IconSkills icon={cn} /> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="experience-container">
          <div className="projects experience-group">
            <div className="section-title">
              <HeadingTwo title="Projects" />
            </div>
            <div className="section-content">
              {/* <ProjectsPage /> */}
              <Carousel />
            </div>
          </div>
          {/* <div className="resume experience-group">
            <div className="section-content">
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
            </div>
          </div> */}
        </section>
      </main>
    </div>
  )
}

export default MainPage
