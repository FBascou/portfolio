import Box from '../../components/Box/Box';
import fr from '../../assets/icons/fr.svg';
import gb from '../../assets/icons/gb.svg';
import es from '../../assets/icons/es.svg';
import cn from '../../assets/icons/cn.svg';
import dataCV from '../../dataCV.json';
import './SkillsPage.scss';
import { BoxColorContext } from '../../utilities/context/boxColorContext';
import { useContext } from 'react';

interface DataInterface {
  [key: string]: any;
}

const SkillsPage = (): JSX.Element => {
  const dataSkillsFrontend: DataInterface = dataCV[1].list[0]['frontend'];
  const dataSkillsTools: DataInterface = [
    ...dataCV[1].list[1]['backend'],
    ...dataCV[1].list[2]['tools'],
  ];
  const dataSkillsLanguages: DataInterface = dataCV[1].list[3]['languages'];
  const languageFlags = [gb, es, fr, cn];
  const { boxColor } = useContext(BoxColorContext);

  return (
    <aside className="aside-container content-container">
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <div className="section-content" id="skills-section">
        <div className="skill-section">
          <div className="skill-title">
            <h3>Frontend</h3>
          </div>
          <div className="skill-content">
            <ul className="item-list">
              {dataSkillsFrontend.map((item: string, index: number) => (
                <li key={index}>
                  <Box color={boxColor ? 'blue' : 'none'} item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="skill-section">
          <div className="skill-title">
            <h3>Tools</h3>
          </div>
          <div className="skill-content">
            <ul className="item-list">
              {dataSkillsTools.map((item: string, index: number) => (
                <li key={index}>
                  <Box color={boxColor ? 'blue' : 'none'} item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="skill-section">
          <div className="skill-title">
            <h3>Languages</h3>
          </div>
          <div className="skill-content">
            <ul className="item-list">
              {dataSkillsLanguages.map((item: any, index: number) => (
                <li key={item.id}>
                  <img src={languageFlags[index]} alt={item.language} className="img-language" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SkillsPage;
