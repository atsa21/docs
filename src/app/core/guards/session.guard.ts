import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { appRouts } from '@core/constants';
import {
  UserService,
} from '@core/services';
import { catchError, map, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  canActivate(): boolean | Observable<boolean> {
    return this.userService.getUser().pipe(
      take(1),
      map((user) => !!user),
      catchError(() => {
        this.router.navigate([appRouts.login.routerPath]);
        return of(false);
      })
    );
  }
}
