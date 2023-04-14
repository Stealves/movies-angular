import { Component, OnInit } from '@angular/core';
import { Movies, MoviesHttpResult } from 'src/app/interfaces/movies';
import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesData$!: Observable<Movies[] | undefined>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  //  this.moviesService.getMovies().subscribe(data => this.moviesData$ = data);
   this.moviesData$ = this.moviesService.getMovies();
    console.log(this.moviesData$);

  };

}
