import { Routes } from '@angular/router';
import { appRouts } from '@core/constants';
import { MainComponent } from './main.component';
import { SessionGuard } from '@core/guards';

export const mainRoutes: Routes = [
  {
    path: appRouts.auth.routerPath,
    component: MainComponent,
    canActivate: [SessionGuard],
  },
];