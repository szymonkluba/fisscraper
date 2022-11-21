import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CsrfHeaderInterceptor } from '../interceptors/csrf_header/csrf-header.interceptor';

export const csrfTokenProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: CsrfHeaderInterceptor, multi: true },
];
