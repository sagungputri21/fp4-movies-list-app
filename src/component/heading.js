import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col text-white text-start'>
			<h1 className='font-semibold'>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;