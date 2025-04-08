import { Routes } from '@angular/router';

export const privateRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/app.admin.routes').then((m) => m.adminRoutes),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/app.user.routes').then((m) => m.userRoutes),
  },
];
