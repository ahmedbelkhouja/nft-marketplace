import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public', // Keep only one redirect
    pathMatch: 'full',
  },

  {
    path: 'public',
    loadChildren: () =>
      import('./public/app.public.routes').then((m) => m.publicRoutes),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./private/app.private.routes').then((m) => m.privateRoutes),
  },
];
