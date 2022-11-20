import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CsrfHeaderInterceptor } from '../utils/csrf-header.interceptor';

export const csrfTokenProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: CsrfHeaderInterceptor, multi: true },
];
