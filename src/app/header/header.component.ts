import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { RootState } from '../store/store.module';
import { Movie } from '../types/movies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  favorites$!: Observable<Movie[]>;

  constructor(private store: Store<RootState>) {
    this.favorites$ = this.store
      .select('movies')
      .pipe(map((value) => value.favorites));
  }

}
