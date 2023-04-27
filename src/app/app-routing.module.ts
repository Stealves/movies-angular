import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MoviesFavoritesComponent } from './movies/movies-favorites/movies-favorites.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "movies",
    component: MoviesListComponent
  },
  {
    path: "movies/:id",
    component: MovieDetailComponent
  },
  {
    path: "favorites",
    component: MoviesFavoritesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
