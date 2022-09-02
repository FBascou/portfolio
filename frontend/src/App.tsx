import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import './styles/main.scss';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ResumePage from './pages/ResumePage/ResumePage';

const App: React.FC = () => {
	return (
		<div className='App'>
			<Layout page={<HomePage />} />
			<Layout page={<AboutPage />} />
			<Layout page={<ProjectsPage />} />
			<Layout page={<ResumePage />} />
		</div>
	);
};

export default App;
