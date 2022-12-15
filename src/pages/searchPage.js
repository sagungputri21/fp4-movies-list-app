import React, { useState, useEffect } from "react";
import "../App.css"
import { useSearchParams } from "react-router-dom";
import MovieList from "../component/movieList";

const SearchPage = () => {
    const [movie, setMovie] = useState([]);
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get(`s`)

    const movieDataSearch = async() => {
        try{
            const url = `http://www.omdbapi.com/?s=${searchParams.get(`s`)}&apikey=2146f476`
            const data = await fetch(url)
            const responseJson = await data.json()
            if(responseJson.Search) {
                setMovie(responseJson.Search)
            }
            console.log(data)
            
        } catch (err) {
            console.log("error ===> ", err);
        }
    };

    useEffect(() => {
        movieDataSearch();
    }, [])

    console.log(movie)

    const capitalizeFirstLowercaseRest = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      };

    return(
        <div className="container-xxl mt-32">
            <h2 className="text-start text-4xl text-blue-400 font-semibold mb-4">
                {capitalizeFirstLowercaseRest(`${searchTerm}`)} <span className="text-white">Movies</span>
            </h2>
            <p className='text-gray-300 text-start mb-4'>Result of <span className="font-bold">{`${searchParams.get(`s`)}`}</span> movies : ({`${movie.length}`}) items</p>
            <div className="flex flex-wrap gap-5">
                <MovieList movies={movie}/>
            </div>
        </div>
    )
}

export default SearchPage