import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addFavorite, removeFavorite } from 'src/app/store/movies/movies.actions';
import { RootState } from 'src/app/store/store.module';
import { Movie } from 'src/app/types/movies';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.css']
})
export class MoviesItemComponent {
  @Input() movie!: Movie;
  @Input() isFavList = false;

  constructor(private store: Store<RootState>) {}

  addFavotite(): void {
    this.store.dispatch(addFavorite({ movie: this.movie }));
  }

  removeFavorite(): void {
    this.store.dispatch(removeFavorite({ movie: this.movie }));
  }
}
