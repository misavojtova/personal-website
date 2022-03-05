import React from 'react';
import './MainTitle.css';

const MainTitle = () => {
	return (
		<div className=' mobile: h-[45vh] flex flex-col items-center justify-center  desktop: '>
			<h4 className='my-2 text-[4vw] lg:text-[3vw] font-rubikMonoOne w-full text-center'>
				MICHAELA VOJTOVA
			</h4>
			<h5
				className='my-2 font-rubikMonoOne text-center text-[8vw]
      lg:text-[6vw]  w-full text-transparent stroke-text tracking-wide '>
				WEB DEVELOPER
			</h5>
		</div>
	);
};
// md:text-6xl lg:text-7xl

export default MainTitle;
