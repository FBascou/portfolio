import './NavBar.scss'
import { ThemeContext } from '../../utilities/context/themeContext'
import { useState, useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

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
        <li>
          <h5>Projects</h5>
        </li>
        <li>
          <h5>Resume</h5>
        </li>
        <li>
          <h5>Contact</h5>
        </li>
        <li className="navbar-link">
          <a href="https://github.com/FBascou">
            <h5>Github</h5>
          </a>
        </li>
        <li className="navbar-link">
          <a href="https://www.linkedin.com/in/felipebascou/">
            <h5>LinkedIn</h5>
          </a>
        </li>
        <li className="navbar-mode" onClick={toggleTheme}>
          {theme ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}
        </li>
        <li className="navbar-toggle" onClick={toggleMenu}>
          {menu ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
