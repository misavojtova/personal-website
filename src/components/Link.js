import React from 'react';

const Link = ({ link }) => {
	return (
		<a
			href='##'
			className='mobile: my-3 mx-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-cm-blue hover:scale-110 transition-all duration-150 ease-in-out desktop: md:my-0 md:mt-2'>
			{link.name}
		</a>
	);
};

export default Link;
