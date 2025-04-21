import { Routes } from '@angular/router';
import { appRouts } from '@core/constants';
import { MainComponent } from './main.component';
import { RoleGuard, SessionGuard,  } from '@core/guards';
import { ReviewerComponent } from './pages/reviewer/reviewer.component';
import { UserComponent } from './pages/user/user.component';
import { ERole } from '@core/enums';

export const mainRoutes: Routes = [
  {
    path: appRouts.main.routerPath,
    component: MainComponent,
    canActivate: [SessionGuard],
    children: [
      { 
        path: appRouts.my_documents.routerPath,
        component: UserComponent,
        canActivate: [RoleGuard],
        data: { requireUserRole: [ERole.User] },
      },
      { 
        path: appRouts.documents.routerPath,
        component: ReviewerComponent,
        canActivate: [RoleGuard],
        data: { requireUserRole: [ERole.Reviewer] },
      },
    ],
  },
];