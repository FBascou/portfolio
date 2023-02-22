import './NavBar.scss';
import { ThemeContext } from '../../utilities/context/themeContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GithubNav from '../../../assets/icons/GithubNav.png';
import LinkedInNav from '../../../assets/icons/LinkedInNav.png';
import MainPage from '../../pages/MainPage/MainPage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import ResumePage from '../../pages/ResumePage/ResumePage';
import { PageTitleInterface } from '../../utilities/interfaces/page-title.interface';
import { BoxColorContext } from '../../utilities/context/boxColorContext';

// Animate theme so it goes from daylight to night with different colors
// IE: Light > Yellow > Orange > Purple > Dark
// Smooth transition, gradient style (?)
// Or change to lightbulbs instead of sun and moon
// Links should have onhover color - change it to proper color
// Links should have onclick color
// Contact should also have on hover color
// Theme Switcher should be either a button or anchor tag https://www.youtube.com/watch?v=pMoL2URoqhI
// Header shouold have margin bottom and top
// Finish mobile navbar

const NavBar = ({ pageTitle }: PageTitleInterface) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menu, setMenu] = useState<boolean>(false);
  const { setBoxColor } = useContext(BoxColorContext);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const toggleSkillsBoxColor = (boolean: boolean) => {
    if (theme) {
      setBoxColor(boolean);
    } else return;
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" onClick={() => toggleSkillsBoxColor(true)}>
          <h4>{pageTitle}</h4>
        </Link>
      </div>
      {menu ? <div className="menu">MENU</div> : null}
      <ul className="navbar-links">
        {/* <li className="navbar-link">
          <Link to="about" onClick={() => toggleSkillsBoxColor(true)}>
            <p>About</p>
          </Link>
        </li> */}
        <li className="navbar-link">
          <Link to="projects" onClick={() => toggleSkillsBoxColor(false)}>
            <p>Projects</p>
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="resume" onClick={() => toggleSkillsBoxColor(false)}>
            <p>Resume</p>
          </Link>
        </li>

        <li className="navbar-link">
          <a target="_blank" href="https://github.com/FBascou">
            <p>Github</p>
            {/* <div className="icon-container">
              <img className="icon" src={GithubNav} alt="Github Profile" />
            </div> */}
          </a>
        </li>
        <li className="navbar-link">
          <a target="_blank" href="https://www.linkedin.com/in/felipebascou/">
            <p>LinkedIn</p>
            {/* <div className="icon-container">
              <img className="icon" src={LinkedInNav} alt="LinkedIn Profile" />
            </div> */}
          </a>
        </li>
        <li className="navbar-link">
          <Link to="contact" onClick={() => setBoxColor(false)}>
            <p style={{ color: theme ? 'yellow' : 'dodgerblue' }}>Contact</p>
          </Link>
        </li>
        <li className="navbar-theme">
          <button
            type="button"
            className="navbar-theme-btn"
            style={{ all: 'unset' }}
            onClick={toggleTheme}
          >
            {theme ? (
              <LightbulbIcon sx={{ fontSize: 25 }} />
            ) : (
              <LightbulbOutlinedIcon sx={{ fontSize: 25 }} />
            )}
          </button>
        </li>
        <li className="navbar-menu">
          <button className="navbar-menu-btn" style={{ all: 'unset' }} onClick={toggleMenu}>
            {menu ? <CloseIcon sx={{ fontSize: 25 }} /> : <MenuIcon sx={{ fontSize: 25 }} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
