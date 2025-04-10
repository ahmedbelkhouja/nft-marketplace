import { Routes } from '@angular/router';
import { UserGuard } from 'src/app/core/guards/user-guard.guard';

export const userRoutes: Routes = [
  {
    path: '',
    canActivate: [UserGuard],
    loadComponent: () =>
      import('./layout/layout.page').then((m) => m.LayoutPage),
  },
];
