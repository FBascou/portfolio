import './styles/main.scss'
import { useContext } from 'react'
import MainPage from './pages/MainPage/MainPage'
import { ThemeContext } from '../src/utilities/context/themeContext'
import NavBar from './components/NavBar/NavBar'
import SkillsPage from './pages/SkillsPage/SkillsPage'

// why have main page? just add the main page without the component

const App = (): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme ? 'dark-theme' : 'light-theme'}`}>
      <header className="header-container">
        <a href="#main-content" className="skip-link">
          <p>Press "Enter" to skip to main section</p>
        </a>
        <NavBar pageTitle={'Felipe Bascou'} />
      </header>
      <aside className="aside-container">
        <SkillsPage />
      </aside>
      <main className="main-container" id="main-content">
        <MainPage />
      </main>
    </div>
  )
}

export default App
