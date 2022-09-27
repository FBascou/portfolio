import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeProvider from '../../frontend/src/utilities/context/themeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={false}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
