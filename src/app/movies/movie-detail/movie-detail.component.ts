import { Component, OnInit } from '@angular/core';
import { MovieDetailHttpResult } from 'src/app/types/movies';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie?: MovieDetailHttpResult;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.moviesService.getMovieById(id).subscribe(data => this.movie = data);
    })
  }
}
