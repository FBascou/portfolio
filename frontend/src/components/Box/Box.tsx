import './Box.scss'
import { ThemeContext } from '../../utilities/context/themeContext'
import { useContext } from 'react'

export interface BoxInterface {
  item: any
  color: string
}

// add color theme on general - dark theme {.box{...}}

const Box = ({ item, color }: BoxInterface): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`box-container ${theme ? `box-dark-theme box-${color}` : `box-light-theme`} `}>
      {item}
    </div>
  )
}

export default Box
