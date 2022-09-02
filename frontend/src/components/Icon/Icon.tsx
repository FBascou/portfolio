import React from 'react';
import './Icon.scss';

const Icon: React.FC<any> = ({ icon }): JSX.Element => {
	return (
		<div className='icon-container'>
			<img className='icon' src={icon} alt='' />
		</div>
	);
};

export default Icon;
