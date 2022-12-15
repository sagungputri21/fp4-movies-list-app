import React from "react";
import { Card } from "react-bootstrap";
import "../styles/Card.css" 

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie) => (
				<div style={{width: '22rem'}} className="flex flex-wrap overflow-hidden">
					{/* <Card style={{height: '460px'}}>
						<div className='img-fluid overflow-hidden'>
							<img src={movie.Poster} alt='movie'></img>
							<h4 className="news-title">
								{movie.Title}
							</h4>
						</div>
					</Card> */}
					<p className="text-[100px]">hahahhhahah</p>
				</div>
			))}
		</>
	);
};

export default MovieList;