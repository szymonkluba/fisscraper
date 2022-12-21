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
  private readonly excludedUrls = ['.svg'];
  private readonly excludedUrlsRegex: RegExp[] = this.excludedUrls.map(
    urlPattern => new RegExp(urlPattern, 'i')
  );
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const passThrough: boolean = !!this.excludedUrlsRegex.find(regex =>
      regex.test(request.url)
    );

    if (passThrough) {
      return next.handle(request);
    }

    request = request.clone({
      setHeaders: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    });

    return next.handle(request);
  }
}
