import { useContext, useState } from 'react';
import MainPage from './pages/MainPage/MainPage';
import { ThemeContext } from '../src/utilities/context/themeContext';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Header from './components/Header/Header';

// For ideal appearance on iOS when users add a progressive web app to the home screen, define an `apple-touch-icon`. It must point to a non-transparent 192px (or 180px) square PNG. Learn More.
// Lazy load
// useEffect with theme and body
// try to make infinite square but infinite "FB"
// Create README files for all the projects

const App = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  // for mobile project/resume pages they can be select/dropdown

  return (
    <div className={`App ${theme ? 'dark-theme' : 'light-theme'}`}>
      {/* <LandingPage /> */}
      <Header pageTitle={'Felipe Bascou'} />
      <SkillsPage />
      <MainPage />
    </div>
  );
};

export default App;
