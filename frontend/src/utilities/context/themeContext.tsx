import React, { createContext, useState } from 'react'
import { ThemeContextInterface } from 'utilities/interfaces/theme-context.interface'

const defaultTheme = {
  theme: false,
  toggleTheme: () => {},
}

export const ThemeContext = createContext<ThemeContextInterface>(defaultTheme)

const ThemeProvider: React.FC<ThemeContextInterface> = ({ children }) => {
  const [theme, setTheme]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(
    defaultTheme.theme,
  )

  const toggleTheme = (): void => {
    setTheme((theme) => !theme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
