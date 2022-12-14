import Box from '../../components/Box/Box'
import Carousel from '../../components/Carousel/Carousel'
import './ResumePage.scss'

interface ResumePageInterface {
  data: any[]
  component?: JSX.Element
}

//Download is not well aligned, maybe ResumePage gap must be changed?
// add section content?
const ResumePage = ({ data, component }: ResumePageInterface): JSX.Element => {
  return (
    <div className="content-container">
      <div className="resume-title">
        <h2>Resume</h2>
      </div>
      <Carousel data={data} component={component} />
      <div className="resume-download">
        <button className="button-primary">
          <p>Download Resume</p>
        </button>
      </div>
    </div>
  )
}

export default ResumePage
