import './styles/main.scss'
import { useContext } from 'react'
import MainPage from './pages/MainPage/MainPage'
import { ThemeContext } from '../src/utilities/context/themeContext'

// why have main page? just add the main page without the component

const App = (): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme ? 'dark-theme' : 'light-theme'}`}>
      <MainPage />
    </div>
  )
}

export default App
