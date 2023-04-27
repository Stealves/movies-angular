import { Movie } from "src/app/types/movies";


export interface MoviesStore { 
  favorites: Movie[]; 
}

export const initialState: MoviesStore = {
   favorites: [],
};