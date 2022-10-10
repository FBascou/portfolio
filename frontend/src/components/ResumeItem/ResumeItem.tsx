import './ResumeItem.scss'
import { ResumeItemInterface } from '../../utilities/interfaces/resume-item.interface'
import Box from '../Box/Box'

const ResumeItem = ({
  id,
  header,
  name,
  position,
  description,
  workList,
  educationList,
  volunteeringList,
}: ResumeItemInterface): JSX.Element => {
  return (
    <div className="resume-item-container" id={header}>
      <div className="resume-item-title">
        <h4>{name}</h4>
      </div>
      <div className="resume-item-overview">
        <div className="resume-item-overview-section resume-item-info">
          <div className="resume-item-section">
            <div className="resume-item-section-header">
              <h3>Description</h3>
            </div>
            <div className="resume-item-section-content">
              <p>{description}</p>
            </div>
          </div>
          <div className="resume-item-section">
            <div className="resume-item-section-header">
              <h3>Work</h3>
            </div>
            <div className="resume-item-section-content">
              <ul className="resume-item-section-content">
                {workList?.map((item) => (
                  <li key={item}>
                    <Box item={item} color="purple" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="resume-item-section">
            <div className="resume-item-section-header">
              <h3>Education</h3>
            </div>
            <div className="resume-item-section-content">
              <ul className="resume-item-section-content">
                {educationList?.map((item) => (
                  <li key={item}>
                    <Box item={item} color="purple" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="resume-item-section">
            <div className="resume-item-section-header">
              <h3>Volunteering</h3>
            </div>
            <div className="resume-item-section-content">
              <ul className="resume-item-section-content">
                {volunteeringList?.map((item) => (
                  <li key={item}>
                    <Box item={item} color="purple" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeItem
