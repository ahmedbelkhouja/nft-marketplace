import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },
  {
    path: 'public',
    canActivate: [AuthGuard], // Ensure the user is authenticated before accessing public routes
    loadChildren: () =>
      import('./public/app.public.routes').then((m) => m.publicRoutes),
  },
  {
    path: 'private',
    canActivate: [AuthGuard], // Ensure the user is authenticated before accessing private routes
    loadChildren: () =>
      import('./private/app.private.routes').then(
        (m) => m.privateRoutes // Load private routes
      ),
  },
];
