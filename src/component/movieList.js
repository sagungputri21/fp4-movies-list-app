import React from "react";
import { Card } from "react-bootstrap";
import "../styles/Card.css" 

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie) => (
				<div style={{width: '22rem'}} className="news-card">
					<Card style={{height: '460px'}}>
						<div className='img-fluid'>
							<img src={movie.Poster} alt='movie'></img>
							<h4 className="news-title">
								{movie.Title}
							</h4>
						</div>
					</Card>
				</div>
			))}
		</>
	);
};

export default MovieList;