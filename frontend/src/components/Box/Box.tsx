import './Box.scss'
import { ThemeContext } from '../../utilities/context/themeContext'
import { useContext } from 'react'

export interface BoxInterface {
  item: any
}

const Box = ({ item }: BoxInterface): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`box-container ${theme ? 'box-dark-theme' : 'box-light-theme'}`}>{item}</div>
  )
}

export default Box
