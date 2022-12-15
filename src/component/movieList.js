import React from "react";
import { Card } from "react-bootstrap";
import "../styles/Card.css" 
import MovieCard from "./cards/MovieCard";

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie) => (
				<div className="gapping flex flex-wrap overflow-hidden">
					<MovieCard 
						Title={movie.Title}
						Poster={movie.Poster}
						Year={movie.Year}
						Type={movie.Type}
					/>
				</div>
			))}
		</>
	);
};

export default MovieList;