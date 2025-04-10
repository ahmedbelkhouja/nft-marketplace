// app.user.routes.ts
import { Routes } from '@angular/router';
import { UserGuard } from 'src/app/core/guards/user-guard.guard';

export const userRoutes: Routes = [
  {
    path: '',
    canActivate: [UserGuard],
    loadComponent: () =>
      import('./layout/layout.page').then((m) => m.LayoutPage),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./pages/create/create.page').then((m) => m.CreatePage),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./pages/contact/contact.page').then((m) => m.ContactPage),
      },
      {
        path: 'add-wallet',
        loadComponent: () =>
          import('./pages/connect/connect.page').then((m) => m.ConnectPage),
      },
    ],
  },
];
