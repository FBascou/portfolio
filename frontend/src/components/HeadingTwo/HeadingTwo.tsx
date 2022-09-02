import React from 'react';
import './HeadingTwo.scss';

interface HeadingTwoProps {
	title: string;
}

const HeadingTwo: React.FC<HeadingTwoProps> = ({ title }): JSX.Element => {
	return <h2 className='heading-two'>{title}</h2>;
};

export default HeadingTwo;
