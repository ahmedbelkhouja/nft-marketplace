import { Routes } from '@angular/router';
import { PublicGuard } from './core/guards/public-guard.guard';
import { AdminGuard } from './core/guards/admin-guard.guard';
import { UserGuard } from './core/guards/user-guard.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
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
      import('./private/app.private.routes').then(
        (m) => m.privateRoutes // Load private routes
      ),
  },
];
