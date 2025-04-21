import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { appRouts } from '@core/constants';

export const authRoutes: Routes = [
  {
    path: appRouts.auth.routerPath,
    component: AuthComponent,
    children: [
      { 
        path: appRouts.login.routerPath,
        component: LoginComponent,
      },
      {
        path: '',
        redirectTo: appRouts.login.routerPath,
        pathMatch: 'full',
      },
    ],
  },
];