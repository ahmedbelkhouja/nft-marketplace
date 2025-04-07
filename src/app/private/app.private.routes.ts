import { Routes } from '@angular/router';

export const privateRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
];
