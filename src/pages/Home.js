import '../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MovieList from '../component/movieList';
import SearchBox from '../component/searchInput';
import MovieListHeading from '../component/heading';
import { Container } from 'react-bootstrap';

export const Home = () => {
  const [movie, setMovie] = useState([]);
  
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
    <Container>
    <div className="container-fluid movie-app mt-24">
      <div className="align-items-center mb-4 mt-36">
        <MovieListHeading heading='Popular Star Wars Movies'/>
      </div>
      <p className='text-gray-300 text-start mb-4'>Total : {`${movie.length}`} items</p>
      <div className='flex flex-wrap gap-4'>
        <MovieList movies={movie}/>
      </div>
    </div>
    </Container>
  );
}

export default Home;
