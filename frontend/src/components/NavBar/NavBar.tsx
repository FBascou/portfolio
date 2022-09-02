import Icon from '../Icon/Icon';
import React from 'react';
import GithubIcon from '../../../assets/icons/GithubNav.png';
import LinkedInIcon from '../../../assets/icons/LinkedInNav.png';
import './NavBar.scss';

const NavBar: React.FC = (): JSX.Element => {
	return (
		<nav className='navbar-container'>
			<ul className='navbar-ul'>
				<li className='navbar-link'>
					<a href=''>Home</a>
				</li>
				<li className='navbar-link'>
					<a href=''>About</a>
				</li>
				<li className='navbar-link'>
					<a href=''>Projects</a>
				</li>
				<li className='navbar-link'>
					<a href=''>Resume</a>
				</li>

				<li className='navbar-link'>
					<ul className='sub-navbar-ul'>
						<li className='navbar-link'>
							<a href='https://github.com/FBascou'>
								<Icon icon={GithubIcon} />
							</a>
						</li>
						<li className='navbar-link'>
							<a href='https://www.linkedin.com/in/felipebascou/'>
								<Icon icon={LinkedInIcon} />
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
