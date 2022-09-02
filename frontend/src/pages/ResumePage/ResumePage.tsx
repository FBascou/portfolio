import HeadingTwo from '../../components/HeadingTwo/HeadingTwo';
import React from 'react';
import './ResumePage.scss';

const ResumePage: React.FC = (): JSX.Element => {
	return (
		<div className='resume-container'>
			<HeadingTwo title='Resume' />
			<div className='resume-about'>
				<div className='about-header'>
					<div className='about-name'></div>
					<div className='about-position'></div>
				</div>
				<div className='about-description'></div>
			</div>
			<div className='resume-skills'>
				<div className='skills-tech'>
					<div className='skills-frontend'></div>
					<div className='skills-backend'></div>
					<div className='skills-misc'></div>
				</div>
				<div className='skills-languages'></div>
			</div>
			<div className='resume-work'></div>
			<div className='resume-education'></div>
			<div className='resume-volunteering'></div>
			<div className='resume-download-btn'>
				<button>Download</button>
			</div>
		</div>
	);
};

export default ResumePage;
