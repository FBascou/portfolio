import ResumeItem from '../../components/ResumeItem/ResumeItem'
import './ResumePage.scss'
import Carousel from '../../components/Carousel/Carousel'

interface ResumePageInterface {
  data: any[]
  component?: JSX.Element
}

const ResumePage = ({ data, component }: ResumePageInterface): JSX.Element => {
  return (
    <div className="resume-container">
      <Carousel data={data} component={component} />
    </div>
  )
}

export default ResumePage
