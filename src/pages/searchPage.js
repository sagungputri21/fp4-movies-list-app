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
            const url = `http://www.omdbapi.com/?s=spider&apikey=2146f476`
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
        <div className="container-xxl">
            <h1>{capitalizeFirstLowercaseRest(`${searchTerm}`)} Movies</h1>
            <MovieList movies={movie}/>
        </div>
    )
}

export default SearchPage