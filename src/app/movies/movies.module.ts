import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesItemComponent } from './movies-item/movies-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';
import { MoviesFavoritesComponent } from './movies-favorites/movies-favorites.component';
import { NgOptimizedImage } from '@angular/common'


@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesItemComponent,
    MovieDetailComponent,
    MoviesFavoritesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage
  ]
})
export class MoviesModule { }
