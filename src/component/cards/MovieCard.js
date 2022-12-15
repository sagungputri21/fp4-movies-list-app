import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

const MovieCard = ({Title, Poster, Type, imdbID, imdbRating, Plot, Year}) => {

  // const dispatch = useDispatch();
  // const saveUnsavedData = () => {
  //   dispatch(
  //     saveActions.saveItem({
  //       imageURL, name, title, author, path, desc
  //     })
  //   );
  // };
    return (
      <div>
      <Card>
        <img className="img-fluid" 
          src={`${Poster == null ? "/assests/image-not-found.jpg" : `${Poster}`}`} 
        />
      </Card>
      <section className="flex justify-between mx-auto">
      <div className="flex flex-col">
          <h3>{Title}</h3>
          <div className="flex gap-3">
            <p>{Year}</p>
            <div className="flex gap-1">
            <img src="/assests/star.png"/>
            <p>{imdbRating}</p>
            </div>
          </div>
        </div>
        <button
          onClick={""}
          className="outline-none bg-transparent"
        >
          <img src="/assests/bookmark.png" className="shadow-lg shadow-white"/>
        </button>
      </section>
      </div>
    )
}

export default MovieCard;
  