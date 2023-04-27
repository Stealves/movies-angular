import { createReducer, on } from "@ngrx/store";
import { initialState } from "./movies.store";
import { addFavorite, removeFavorite } from "./movies.actions";

export const favoritesReducer = createReducer(
  initialState,
  on(addFavorite, (state, { movie }) => 
    state.favorites.indexOf(movie) === -1 ?
    {
      ...state,
      favorites: state.favorites.concat(movie)
    } : {...state}
  ),

  on(removeFavorite, (state, { movie }) => ({
    ...state,
    favorites: state.favorites.filter((item) => item.id != movie.id)
  }))
);