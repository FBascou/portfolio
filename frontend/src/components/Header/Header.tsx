import SkipLink from '../../components/SkipLink/SkipLink'
import NavBar from '../../components/NavBar/NavBar'
import { PageTitleInterface } from '../../utilities/interfaces/page-title.interface'
import './Header.scss'

const Header = ({ pageTitle }: PageTitleInterface): JSX.Element => {
  return (
    <header className="header-container">
      <SkipLink />
      <NavBar pageTitle={pageTitle} />
    </header>
  )
}

export default Header
