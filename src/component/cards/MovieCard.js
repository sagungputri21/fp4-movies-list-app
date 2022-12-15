import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveActions } from '../../features/wishlistSlice';

const MovieCard = ({ Title, Poster, Type, imdbID, Plot, Year }) => {
  
  const dispatch = useDispatch();
  const saveUnsavedData = () => {
    dispatch(
      saveActions.saveItem({
        Title, Poster, Type, imdbID, Plot, Year
      })
    );
  };

  return (
    <div className="mb-5">
      <div className="bg-[#20283E] rounded-lg w-[270px] h-[365px]">
        <img
          className="p-2.5 h-[300px] w-full"
          src={`${
            Poster == null ? "/assests/image-not-found.jpg" : `${Poster}`
          }`}
        />
        <section className="p-3 overflow-hidden -mt-10 flex justify-between mx-auto bg-[#323B54] rounded-xl w-[270px]">
        <div className="text-start flex flex-col text-white w-3/4 mt-4">
          <h5 className="font-semibold text-[18px]">{Title}</h5>
          <div className="flex gap-3 text-sm">
            <p>{Year}</p>
            {"|"}
            <p>{Type}</p>
          </div>
        </div>
        <button onClick={saveUnsavedData} className="outline-none bg-transparent flex items-start my-auto">
          <img src="/assests/bookmark.png" className="w-9 h-8" />
        </button>
      </section>
      </div>
    </div>
  );
};

export default MovieCard;
