import './styles/main.scss'
import MainPage from './pages/MainPage/MainPage'
import { ThemeContext } from '../src/utilities/context/themeContext'
import { useContext } from 'react'

const App = (): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme ? 'dark-theme' : 'light-theme'}`}>
      <MainPage />
    </div>
  )
}

export default App
