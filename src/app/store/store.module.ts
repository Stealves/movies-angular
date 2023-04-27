import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { favoritesReducer } from './movies/movies.reducer';
import { MoviesStore } from './movies/movies.store';

export type RootState = {
  movies: MoviesStore
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ movies: favoritesReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ]
})
export class StoreAppModule { }
