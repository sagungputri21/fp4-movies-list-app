import { createSlice } from "@reduxjs/toolkit";

const savedItems =
  localStorage.getItem("moviesList") !== null
    ? JSON.parse(localStorage.getItem("moviesList"))
    : [];

const setItemFunc = (item) => {
  localStorage.setItem("moviesList", JSON.stringify(item));
};

const initialState = {
    moviesList: savedItems,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // save movies to wishlist
    saveItem(state, action) {
      const newData = action.payload;
      const existingData = state.moviesList.find(
        (item) => item.Title === newData.Title
      );

      if (!existingData) {
        state.moviesList.push({
          Title: newData.Title, 
          Poster: newData.Poster, 
          Type: newData.Type,
          Year: newData.Year
        });
      } else {
        state.moviesList = state.moviesList.filter((item) => item.Title !== newData.Title);
      }

      setItemFunc(
        state.moviesList.map((item) => item),
      );
    },

    //delete movies from wishlist
    deleteItem(state, action) {
        const Title = action.payload;
        const existingData = state.moviesList.find((item) => item.Title === Title);
  
        if (existingData) {
          state.moviesList = state.moviesList.filter((item) => item.Title !== Title);
        }
  
        setItemFunc(
          state.moviesList.map((item) => item)
        );
      },
  },
});

export const saveActions = wishlistSlice.actions;
export default wishlistSlice.reducer;
