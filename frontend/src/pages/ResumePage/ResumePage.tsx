import Carousel from '../../components/Carousel/Carousel'
import './ResumePage.scss'

interface ResumePageInterface {
  data: any[]
  component?: JSX.Element
}

const ResumePage = ({ data, component }: ResumePageInterface): JSX.Element => {
  return (
    <div className="resume-container">
      <div className="resume-title">
        <h2>Resume</h2>
      </div>
      <Carousel data={data} component={component} />
    </div>
  )
}

export default ResumePage
