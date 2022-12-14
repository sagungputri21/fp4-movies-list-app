import '../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MovieList from '../component/movieList';
import SearchBox from '../component/searchInput';
import MovieListHeading from '../component/heading';

export const Home = () => {
  const [movie, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  
  const movieData = async() => {
    try{
        const url = `http://www.omdbapi.com/?s=star wars&apikey=2146f476`

        const response = await fetch(url)
        const responseJson = await response.json()

        if(responseJson.Search) {
            setMovie(responseJson.Search)
        }
    } catch (err) {
      console.log("error ===> ", err);  
    }
};

useEffect(() => {
  movieData();
}, []);

  console.log(movie)

  return (
    <div className="container-fluid movie-app mt-24">
      <div className="row d-flex align-items-center mb-4 mt-24">
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>

      </div>

      <div className='row'>
        <MovieList movies={movie}/>
      </div>
    </div>
  );
}

export default Home;
