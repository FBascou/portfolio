import HeadingTwo from '../../components/HeadingTwo/HeadingTwo';
import React, { useState } from 'react';
import dataProjects from '../../dataProjects.json';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import './ProjectsPage.scss';
import { IProjectsPage } from 'utilities/interfaces/projects-page.interface';

const ProjectsPage: React.FC = (): JSX.Element => {
	const [data, setData] = useState<IProjectsPage[]>(dataProjects);

	return (
		<div className='projects-container'>
			<HeadingTwo title='Projects' />
			<div className='project-items'>
				{data.map((item) => (
					<ProjectItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default ProjectsPage;
