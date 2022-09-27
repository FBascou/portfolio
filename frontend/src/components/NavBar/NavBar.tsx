import './NavBar.scss'
import Icon from '../Icon/Icon'
import GithubIcon from '../../../assets/icons/GithubNav.png'
import LinkedInIcon from '../../../assets/icons/LinkedInNav.png'
import { ThemeContext } from '../../utilities/context/themeContext'
import { useContext } from 'react'

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

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
            <Icon icon={GithubIcon} />
          </a>
        </li>
        <li className="navbar-link">
          <a href="https://www.linkedin.com/in/felipebascou/">
            <Icon icon={LinkedInIcon} />
          </a>
        </li>
        <li className="navbar-mode">
          <button onClick={toggleTheme}>{theme ? 'Dark Mode' : 'Light Mode'}</button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
