import Box from '../../components/Box/Box'
import './SkillsPage.scss'
const SkillsPage = (): JSX.Element => {
  return (
    <div className="skills-container">
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <div className="section-content" id="skills-section">
        <div className="skill-section">
          <div className="skill-title">
            <h3>Frontend</h3>
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
            </ul>
          </div>
        </div>
        <div className="skill-section">
          <div className="skill-title">
            <h3>Tools</h3>
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
            <h3>Languages</h3>
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
    </div>
  )
}

export default SkillsPage
