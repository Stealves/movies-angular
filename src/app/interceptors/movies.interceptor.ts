import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class MoviesInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const moviesURL = request.clone({
      url: `${environment.apiUrlBase}${request.url}?api_key=${environment.apiKey}`
    });

    return next.handle(moviesURL);
  }
}

export const moviesInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: MoviesInterceptor, multi: true }
]