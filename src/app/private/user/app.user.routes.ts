import { Routes } from '@angular/router';

export const userRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.page').then((m) => m.LayoutPage),
  },
];
