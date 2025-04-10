import { Routes } from '@angular/router';
import { PublicGuard } from '../core/guards/public-guard.guard';
export const publicRoutes: Routes = [
  {
    path: '',
    canActivate: [PublicGuard],
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePage),
      },

      {
        path: 'market',
        loadComponent: () =>
          import('../shared/pages/market/market.page').then(
            (m) => m.MarketPage
          ),
      },

      {
        path: 'create',
        loadComponent: () =>
          import('../private/user/pages/create/create.page').then(
            (m) => m.CreatePage
          ),
      },

      {
        path: 'contact',
        loadComponent: () =>
          import('../private/user/pages/contact/contact.page').then(
            (m) => m.ContactPage
          ),
      },

      {
        path: 'market/:id',
        loadComponent: () =>
          import('../shared/pages/nft-details/nft-details.page').then(
            (m) => m.NftDetailsPage
          ),
      },
      {
        path: 'connect',
        loadComponent: () =>
          import('../private/user/pages/connect/connect.page').then(
            (m) => m.ConnectPage
          ),
      },
      {
        path: 'history/:id',
        loadComponent: () =>
          import('../shared/pages/history/history.page').then(
            (m) => m.HistoryPage
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./pages/sign-up/sign-up.page').then((m) => m.SignUpPage),
      },
    ],
  },
];
