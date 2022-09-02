import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './Layout.scss';
import Form from '../Form/Form';
import Close from '../../../assets/icons/Close.png';
import Message from '../../../assets/icons/Message.png';
import MenuBar from '../../../assets/icons/MenuBar.png';
import Icon from '../Icon/Icon';

interface LayoutProps {
	page: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ page }): JSX.Element => {
	const [toggleNav, setToggleNav] = useState<boolean>(false);
	const [toggleForm, setToggleForm] = useState<boolean>(false);

	const handleToggleNav = () => {
		setToggleNav((toggleNav) => !toggleNav);
		setToggleForm(false);
	};

	const handleToggleForm = () => {
		setToggleForm((toggleForm) => !toggleForm);
		setToggleNav(false);
	};

	return (
		<div className='layout-container'>
			{page}
			<div className='interaction-container'>
				{toggleNav ? <NavBar /> : null}
				<button className='modal-btn' onClick={handleToggleNav}>
					{toggleNav ? (
						<Icon icon={Close} />
					) : (
						<Icon icon={MenuBar} />
					)}
				</button>
				{toggleForm ? <Form /> : null}
				<button className='modal-btn' onClick={handleToggleForm}>
					{toggleForm ? (
						<Icon icon={Close} />
					) : (
						<Icon icon={Message} />
					)}
				</button>
			</div>
		</div>
	);
};

export default Layout;
