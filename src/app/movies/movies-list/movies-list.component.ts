import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/types/movies';
import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies$?: Observable<Movie[] | undefined>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
   this.movies$ = this.moviesService.getMovies();
  };

}
