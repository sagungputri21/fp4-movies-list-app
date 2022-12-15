import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const SearchBox = (props) => {
	const { text } = props;
	const [value, setValue] = useState('')
	const navigate = useNavigate()

	const movieData = async() => {
		navigate(`/search?s=${value}`)
	}

	return (
		<div className="flex items-center gap-1">
			<input
				type="text" 
				placeholder="  search here..."
				value={text}
				onChange={(e) => setValue(e.target.value)}
				className="outline outline-1 rounded-sm outline-indigo-300 focus:ooutline-none focus:bg-indigo-200 focus:text-black"
			/>
			
			<Button className="button-custom text-sm py-1" onClick={() => movieData()}>
				Search 
			</Button>
			
		</div>
		// <div className='col col-sm-4'>
		// 	<input
		// 		className='form-control'
		// 		value={props.value}
		// 		onChange={(event) => setValue(event.target.value)}
		// 		placeholder='Type to search...'
		// 	></input>

		// 	<Button className="button-custom" onClick={() => movieData()}>
		// 		Search
		// 	</Button>
		// </div>
	);
};

SearchBox.propTypes = {
	text: PropTypes.string
  }

export default SearchBox;