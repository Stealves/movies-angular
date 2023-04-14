import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesHttpResult } from '../interfaces/movies';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<MoviesHttpResult>('https://api.themoviedb.org/3/movie/popular?api_key=067b4df944f4c0ba9eb0c5c9664380ab').pipe(map((data) => data.results));
  }
}

