import './NavBar.scss'
import { ThemeContext } from '../../utilities/context/themeContext'
import { useState, useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import GithubNav from '../../../assets/icons/GithubNav.png'
import LinkedInNav from '../../../assets/icons/LinkedInNav.png'

// Animate theme so it goes from daylight to night with different colors
// IE: Light > Yellow > Orange > Purple > Dark
// Smooth transition, gradient style (?)

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [menu, setMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenu((prev) => !prev)
  }

  return (
    <nav>
      <ul className="navbar">
        <li className="navbar-link">
          <a href="">
            <h5>Projects</h5>
          </a>
        </li>
        <li className="navbar-link">
          <a href="">
            <h5>Resume</h5>
          </a>
        </li>
        <li className="navbar-link">
          <h5>Contact</h5>
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
          {theme ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}
        </li>
        {/* <li className="navbar-toggle" onClick={toggleMenu}>
          {menu ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </li> */}
      </ul>
    </nav>
  )
}

export default NavBar
