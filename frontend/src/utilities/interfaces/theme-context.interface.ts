import React from 'react'

export interface ThemeContextInterface {
  theme: boolean
  toggleTheme?: () => void
  children?: React.ReactNode
}
