import Box from '../../components/Box/Box';
import './AboutPage.scss';

const AboutPage = (): JSX.Element => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>
          Hi, I'm <Box item={'Felipe'} color={'purple'} />
          {/* <span id="header-span" className="header-span">
            Felipe
          </span> */}
          !
        </h1>
      </div>
      <div className="about-subtitle">
        <h2>Frontend Software Developer</h2>
      </div>
      <div className="about-about">
        <h4>
          Looking to work on projects with
          <br />
          <span>Javascript</span>, <span>Typescript</span>, and <span> React</span>
        </h4>
      </div>
    </div>
  );
};

export default AboutPage;
