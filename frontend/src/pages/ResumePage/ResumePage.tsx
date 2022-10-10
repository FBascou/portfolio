import dataCV from '../../dataCV.json'
import ResumeItem from '../../components/ResumeItem/ResumeItem'
import './ResumePage.scss'

const ResumePage = (): JSX.Element => {
  return (
    <div className="resume-container">
      {dataCV.map((item) => (
        <ResumeItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default ResumePage
