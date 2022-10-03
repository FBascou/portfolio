import HeadingTwo from '../../components/HeadingTwo/HeadingTwo'
import NavBar from '../../components/NavBar/NavBar'
import './Header.scss'

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-title">
          <h1>Felipe Bascou</h1>
        </div>
        {/* <div className="header-subtitle">
          <HeadingTwo title="Frontend Software Developer" />
        </div> */}
      </div>
      <NavBar />
    </header>
  )
}

export default Header
