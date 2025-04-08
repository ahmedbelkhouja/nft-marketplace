// app.user.routes.ts
import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';

export const userRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.page').then((m) => m.LayoutPage),
    canActivate: [authGuard], // Add the guard here
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'create',
        loadComponent: () => import('./pages/create/create.page').then(m => m.CreatePage)
      },
      {
        path: 'contact-us',
        loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage)
      },
      {
        path: 'add-wallet',
        loadComponent: () => import('./pages/connect/connect.page').then(m => m.ConnectPage)
      }
    ]
  },
];
