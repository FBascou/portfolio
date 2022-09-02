import React from 'react';
import './HeadingOne.scss';

interface HeadingOneProps {
	title: string;
}

const HeadingOne: React.FC<HeadingOneProps> = ({ title }): JSX.Element => {
	return <h1 className='heading-one'>{title}</h1>;
};

export default HeadingOne;
