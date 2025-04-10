import { Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin-guard.guard';

export const adminRoutes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    loadComponent: () =>
      import('./layout/layout.page').then((m) => m.LayoutPage),
  },
];
