import { Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin-guard.guard';
import { UserGuard } from '../core/guards/user-guard.guard';

export const privateRoutes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin/app.admin.routes').then((m) => m.adminRoutes),
  },
  {
    path: 'user',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./user/app.user.routes').then((m) => m.userRoutes),
  },
];
