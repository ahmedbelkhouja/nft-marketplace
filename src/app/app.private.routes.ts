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
      import('./private/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
];
