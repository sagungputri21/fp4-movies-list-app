import React from "react";
import { useSelector, useDispatch } from "react-redux";
import WishlistCard from "../component/cards/WishlistCard";
import MovieListHeading from "../component/heading";

const WishlistPage = () => {
  const data = useSelector((state) => state.wishlist.moviesList);

  return (
    <div className="text-center container-xxl mt-36">
      <div className="text-center text-white">
        <MovieListHeading heading="Your Watching List" />
      </div>
      <section className="result-section">
        {data.length === 0 ? (
          <h5>Your watchlist is empty...</h5>
        ) : (
          <div>
            <div className="pb-3 text-start">
              <div className="d-flex save-top-section w-full">
                <p className="result text-center text-white">
                  Result for the movies : <span>{`${data.length}`}</span>
                </p>
              </div>
              <hr />
            </div>
            {data.map((data) => (
              <WishlistCard
                Poster={data?.Poster}
                Title={data?.Title}
                Type={data?.Type}
                Year={data?.Year}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default WishlistPage;
