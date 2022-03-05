import React, { useState, useEffect } from 'react';
import '../index.css';
import { links } from '../assets/links';
import Link from './Link';
import { HiOutlineMenu } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';

const Nav = () => {
	const [active, setActive] = useState(false);
	const [resized, setResized] = useState('');

	useEffect(() => {
		setResized('');
	}, [resized]);

	useEffect(() => {
		const onResize = () => {
			setActive(false);
			setResized('hidden');
		};
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	const renderNav = links.map((link, id) => {
		return <Link key={id} link={link} />;
	});

	return (
		<>
			<nav
				className={`${resized} bg-main cm-flex-col w-full h-0 transition-[height] duration-1000 absolute ${
					active && 'h-full'
				} md:h-[8vh] md:opacity-100 md:flex-row md:justify-between md:items-start md:relative md:bg-transparent`}>
				<div
					className={`transition-[opacity] opacity-0 cm-flex-col ${
						active ? 'opacity-100 duration-1500' : 'duration-500'
					} md:opacity-100 md:flex-row`}>
					{renderNav}
				</div>

				<div
					className={`transition-[opacity] opacity-0 flex justify-center text-4xl ${
						active ? 'opacity-100 duration-1500' : 'duration-500'
					} md:opacity-100 `}>
					<BsLinkedin className='cm-icons ' />
					<VscGithub className='cm-icons' />
				</div>
			</nav>
			<div className='absolute text-4xl flex right-1 md:hidden' onClick={() => setActive(!active)}>
				<HiOutlineMenu />
			</div>
		</>
	);
};

//

export default Nav;
