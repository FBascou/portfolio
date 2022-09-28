import './Box.scss'
import { ThemeContext } from '../../utilities/context/themeContext'
import { useContext } from 'react'

export interface BoxInterface {
  item: string
}

const Box = ({ item }: BoxInterface): JSX.Element => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`box-container ${theme ? 'box-dark-theme' : 'box-light-theme'}`}>{item}</div>
  )
}

export default Box
