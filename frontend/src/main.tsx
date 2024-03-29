import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from '../../frontend/src/utilities/context/themeContext';
import BoxColorProvider from './utilities/context/boxColorContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme>
        <BoxColorProvider boxColor setBoxColor={() => true}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BoxColorProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
