import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/types/movies';

export const addFavorite = createAction(
  '[Movies] add Favorite',
  props<{ movie: Movie }>()
);

export const removeFavorite = createAction(
  '[Movies] remove Favorite',
  props<{ movie: Movie }>()
);
