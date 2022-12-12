import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, filter, Observable, of } from 'rxjs';
import { disableSpinner } from '../../../store/spinner.actions';
import { NotificationsService } from '../../../notifications/notifications.service';
import { Store } from '@ngrx/store';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly notificationService: NotificationsService,
    private readonly store: Store
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        this.notificationService.handleErrorNotification(err);
        this.store.dispatch(disableSpinner());
        return of(null);
      }),
      filter(Boolean)
    );
  }
}
