import HeadingThree from '../HeadingThree/HeadingThree';
import React from 'react';
import './ProjectItem.scss';
import { IProjectItem } from '../../utilities/interfaces/projects-item.interface';
import Box from '../../components/Box/Box';

const ProjectItem: React.FC<IProjectItem> = ({
	name,
	description,
	features,
	tech,
	github,
	url,
	media,
}): JSX.Element => {
	return (
		<div className='project-item-container'>
			<HeadingThree title={name} />
			<div className='project-items'>
				<div className='project-description'>
					<p>Description</p>
					<p>{description}</p>
				</div>
				<div className='project-lists'>
					<p>Features</p>
					<ul className='project-list-ul'>
						{features?.map((item) => (
							<li key={item} className='project-list-item'>
								<Box item={item} />
							</li>
						))}
					</ul>
				</div>
				<div className='project-lists'>
					<p>Tech</p>
					<ul className='project-list-ul'>
						{tech?.map((item) => (
							<li key={item} className='project-list-item'>
								<Box item={item} />
							</li>
						))}
					</ul>
				</div>
				<div className='project-media'>
					<div className='project-links'>
						<a
							target='_blank'
							href={github}
							className='project-url'
						>
							Github
						</a>
						<a target='_blank' href={url} className='project-url'>
							Website
						</a>
					</div>
					<img className='project-media' src={media} alt={name} />
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
