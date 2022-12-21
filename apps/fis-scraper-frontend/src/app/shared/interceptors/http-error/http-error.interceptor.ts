import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { NotificationsService } from '@services/notifications.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private readonly excludedUrls = ['.svg'];
  private readonly excludedUrlsRegex: RegExp[] = this.excludedUrls.map(
    urlPattern => new RegExp(urlPattern, 'i')
  );

  constructor(private readonly notificationService: NotificationsService) {}

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

    return next.handle(request).pipe(
      catchError(err => {
        this.notificationService.handleErrorNotification(err);
        throw err;
      })
    );
  }
}
