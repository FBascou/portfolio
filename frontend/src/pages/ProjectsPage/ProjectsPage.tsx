import Carousel from '../../components/Carousel/Carousel';
import './ProjectsPage.scss';

interface ProjectsPageInterface {
  data: any[];
  children?: JSX.Element;
}

const ProjectsPage = ({ data, children }: ProjectsPageInterface): JSX.Element => {
  return (
    <div className="content-container">
      <div className="projects-title">
        <h2>Selected Projects</h2>
      </div>
      <Carousel data={data} children={children} />
    </div>
  );
};

export default ProjectsPage;
