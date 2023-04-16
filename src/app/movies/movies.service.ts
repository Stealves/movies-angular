import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MovieDetailHttpResult, MoviesHttpResult } from '../interfaces/movies';
import { catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<MoviesHttpResult>('movie/popular')
      .pipe(
        map((data) => data.results),
        map((movies) => movies?.map(movie => ({...movie, poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}))),
        retry(3),
        catchError(this.handleApiError)
      );
  }

  getMovieById(id: string) {
    return this.http.get<MovieDetailHttpResult>(`movie/${id}`)
      .pipe(
        map((data) => ({...data, poster_url: `https://image.tmdb.org/t/p/w500${data.poster_path}`})),
        retry(3),
        catchError(this.handleApiError)
      );
  }

  private handleApiError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error.message);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
