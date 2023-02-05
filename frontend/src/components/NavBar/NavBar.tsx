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

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <h4>{pageTitle}</h4>
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-link">
          <Link to="projects">
            <h5>Projects</h5>
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="resume">
            <h5>Resume</h5>
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="contact">
            <h5 style={{ color: theme ? 'yellow' : 'dodgerblue' }}>Contact</h5>
          </Link>
        </li>
        <li className="navbar-link">
          <a target="_blank" href="https://github.com/FBascou">
            <h5>Github</h5>
            {/* <div className="icon-container">
              <img className="icon" src={GithubNav} alt="Github Profile" />
            </div> */}
          </a>
        </li>
        <li className="navbar-link">
          <a target="_blank" href="https://www.linkedin.com/in/felipebascou/">
            <h5>LinkedIn</h5>
            {/* <div className="icon-container">
              <img className="icon" src={LinkedInNav} alt="LinkedIn Profile" />
            </div> */}
          </a>
        </li>
        <li className="navbar-theme" onClick={toggleTheme}>
          <button type="button" className="navbar-theme-btn">
            {theme ? (
              <LightbulbIcon sx={{ fontSize: 25 }} />
            ) : (
              <LightbulbOutlinedIcon sx={{ fontSize: 25 }} />
            )}
          </button>
        </li>
        <li className="navbar-toggle" onClick={toggleMenu}>
          {menu ? <CloseIcon sx={{ fontSize: 25 }} /> : <MenuIcon sx={{ fontSize: 25 }} />}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
