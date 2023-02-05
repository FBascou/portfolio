import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import PDF from '../../../public/files/felipe_bascou_frontend_resume_2023.pdf';
import './ResumePage.scss';

interface ResumePageInterface {
  data: any[];
  component?: JSX.Element;
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
        <Link to={PDF} target="_blank" download>
          <button className="button-primary" type="button">
            <p>Download Resume</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResumePage;
