import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, map, of } from 'rxjs';
import { RootState } from 'src/app/store/store.module';
import { Movie } from 'src/app/types/movies';

@Component({
  selector: 'app-movies-favorites',
  templateUrl: './movies-favorites.component.html',
  styleUrls: ['./movies-favorites.component.css']
})
export class MoviesFavoritesComponent {
  favorites$!: Observable<Movie[]>;

  constructor(private store: Store<RootState>) {
    this.store
      .select('movies')
      .pipe(map((value) => value.favorites))
      .subscribe((data) => {
        this.favorites$ = of(data.filter((e) => e.isFavorite))
      })
  }

}
