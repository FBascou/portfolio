import './styles/main.scss'
import { useContext } from 'react'
import MainPage from './pages/MainPage/MainPage'
import { ThemeContext } from '../src/utilities/context/themeContext'
import NavBar from './components/NavBar/NavBar'
import SkillsPage from './pages/SkillsPage/SkillsPage'
import LandingPage from './pages/LandingPage/LandingPage'

// For ideal appearance on iOS when users add a progressive web app to the home screen, define an `apple-touch-icon`. It must point to a non-transparent 192px (or 180px) square PNG. Learn More.
// Lazy load
// useEffect with theme
// try to make infinite square but infinite "FB"
// Create README files for all the projects
// Make DarkMode different color, maybe gradient?

const App = (): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme ? 'dark-theme' : 'light-theme'}`}>
      {/* <LandingPage /> */}
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
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      <div className="shape shape4"></div>
    </div>
  )
}

export default App
