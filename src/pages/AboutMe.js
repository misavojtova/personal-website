import React from 'react';
import BgHolder from '../components/BgHolder';
import ImgHolder from '../components/ImgHolder';
import MainTitle from '../components/MainTitle';
import Nav from '../components/Nav';

const AboutMe = () => {
	return (
		<>
			<ImgHolder>
				<Nav />
				<MainTitle />
			</ImgHolder>
			<BgHolder></BgHolder>
		</>
	);
};

export default AboutMe;
