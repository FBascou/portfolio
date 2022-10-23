import NavBar from '../../components/NavBar/NavBar'
import './Header.scss'

const Header = () => {
  return (
    <header className="header-container">
      <a href="#main-content" className="skip-link">
        <p>Press "Enter" to skip to main section</p>
      </a>
      <NavBar />
    </header>
  )
}

export default Header
