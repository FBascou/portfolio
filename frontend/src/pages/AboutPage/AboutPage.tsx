import HeadingTwo from '../../components/HeadingTwo/HeadingTwo';
import React from 'react';
import './AboutPage.scss';
import HeadingThree from '../../components/HeadingThree/HeadingThree';
import IconSkills from '../../components/IconSkills/IconSkills';
import JS from '../../../assets/icons/JS.png';
import TS from '../../../assets/icons/TS.png';
import ReactJs from '../../../assets/icons/ReactJs.png';
import HTML from '../../../assets/icons/HTML.png';
import CSS from '../../../assets/icons/CSS.png';
import SASS from '../../../assets/icons/SASS.png';
import Python from '../../../assets/icons/Python.png';
import MySQL from '../../../assets/icons/MySQL.png';
import MongoDB from '../../../assets/icons/MongoDB.png';
import Salesforce from '../../../assets/icons/Salesforce.png';
import GIT from '../../../assets/icons/GIT.png';
import Github from '../../../assets/icons/Github.png';
import AdobeXD from '../../../assets/icons/AdobeXD.png';
import Figma from '../../../assets/icons/Figma.png';
import Postman from '../../../assets/icons/Postman.png';
import Jira from '../../../assets/icons/Jira.png';
import gb from '../../../assets/icons/gb.svg';
import es from '../../../assets/icons/es.svg';
import fr from '../../../assets/icons/fr.svg';
import cn from '../../../assets/icons/cn.svg';

const AboutPage: React.FC = () => {
	return (
		<div className='about-container'>
			<HeadingTwo title='About' />
			<p>
				I am Felipe Bascou, a frontend software developer looking to
				work on projects with Javascript, Typescript, and React
			</p>
			<div className='skills-container'>
				<HeadingTwo title='Skills' />
				<div className='skills-wrapper'>
					<HeadingThree title='Frontend' />
					<ul className='frontend-container'>
						<li className='skills-icons'>
							<IconSkills icon={JS} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={TS} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={ReactJs} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={HTML} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={CSS} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={SASS} />
						</li>
					</ul>
				</div>
				<div className='skills-wrapper'>
					<HeadingThree title='Backend' />
					<ul className='backend-container'>
						<li className='skills-icons'>
							<IconSkills icon={Python} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={MySQL} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={MongoDB} />
						</li>
					</ul>
				</div>
				<div className='skills-wrapper'>
					<HeadingThree title='Misc' />
					<ul className='misc-container'>
						<li className='skills-icons'>
							<IconSkills icon={Salesforce} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={GIT} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={Github} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={AdobeXD} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={Figma} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={Jira} />
						</li>
						<li className='skills-icons'>
							<IconSkills icon={Postman} />
						</li>
					</ul>
				</div>
				<div className='skills-wrapper'>
					<HeadingThree title='Languages' />
					<ul className='languages-container'>
						<li className='skills-icons'>
							<IconSkills icon={gb} />
							Native
						</li>
						<li className='skills-icons'>
							<IconSkills icon={es} />
							Native
						</li>
						<li className='skills-icons'>
							<IconSkills icon={fr} />
							Fluent
						</li>
						<li className='skills-icons'>
							<IconSkills icon={cn} />
							Intermediate
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
