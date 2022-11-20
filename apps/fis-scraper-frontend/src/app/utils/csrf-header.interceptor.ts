import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
// @ts-ignore
import Cookies from 'js-cookie';

@Injectable()
export class CsrfHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    });

    return next.handle(request);
  }
}
