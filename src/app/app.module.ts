import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { moviesInterceptorProvider } from './interceptors/movies.interceptor';
import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [moviesInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
