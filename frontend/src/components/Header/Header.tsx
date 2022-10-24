import NavBar from '../../components/NavBar/NavBar'
import { PageTitleInterface } from '../../utilities/interfaces/page-title.interface'

import './Header.scss'

const Header = ({ pageTitle }: PageTitleInterface) => {
  return (
    <header className="header-container">
      <a href="#main-content" className="skip-link">
        <p>Press "Enter" to skip to main section</p>
      </a>
      <NavBar pageTitle={pageTitle} />
    </header>
  )
}

export default Header
