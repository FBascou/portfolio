import React from 'react';
import './HeadingThree.scss';

interface HeadingThreeProps {
	title?: string;
}

const HeadingThree: React.FC<HeadingThreeProps> = ({ title }): JSX.Element => {
	return <h3 className='heading-three'>{title}</h3>;
};

export default HeadingThree;
