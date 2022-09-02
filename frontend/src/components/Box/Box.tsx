import React from 'react';
import { BoxType } from 'utilities/types/box.type';
import './Box.scss';

const Box: React.FC<BoxType> = ({ item }): JSX.Element => {
	return <div className='box-container'>{item}</div>;
};

export default Box;
