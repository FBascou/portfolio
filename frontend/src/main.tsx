import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ThemeProvider from '../../frontend/src/utilities/context/themeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme>
        <Routes>
          <Route path="/*" element={<App />} />
          {/* <Route path="projects" element={<ProjectsPage data={[]} />} />
        <Route path="resume" element={<ResumePage data={[]} />} /> */}
          {/* <Route path="contact" element={<ContactPage />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
