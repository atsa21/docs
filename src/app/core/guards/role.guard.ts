import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { appRouts } from '@core/constants';
import { ELocalStoragesKeys, ERole } from '@core/enums';

import { LocalStorageService } from '@core/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> {
    const userRole = route.data['requireUserRole'] as ERole[];

    if (
      userRole.includes(
        this.localStorageService.getItem(
          ELocalStoragesKeys.Role,
        ) as ERole,
      )
    ) {
      return true;
    }

    this.router.navigate([appRouts.main.routerPath]);

    return false;
  }
}
