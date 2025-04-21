import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { appRouts } from '@core/constants';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private ngZone: NgZone,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          if (error.status === 401) {
            this.ngZone.run(() => {
              this.router.navigate([appRouts.auth.routerPath]);
            });
          } 

          return throwError(error);
        })
    );
  }
}
