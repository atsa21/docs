import { Routes } from '@angular/router';
import { appRouts } from '@core/constants';
import { authRoutes } from './pages/auth/auth.routes';
import { mainRoutes } from './pages/main/main.routes';
import { SessionGuard } from '@core/guards';

export const routes: Routes = [
  ...authRoutes,
  ...mainRoutes,
  {
    path: '**',
    redirectTo: appRouts.main.routerPath,
  },
];
