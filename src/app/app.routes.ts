import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app.public.routes').then((m) => m.publicRoutes),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./app.private.routes').then((m) => m.privateRoutes),
  },
];
