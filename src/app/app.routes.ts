import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/app.public.routes').then((m) => m.publicRoutes),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./private/app.private.routes').then(
        (m) => m.privateRoutes // Load private routes
      ),
  },
];
