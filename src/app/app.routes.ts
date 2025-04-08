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
  },  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'nft-details',
    loadComponent: () => import('./pages/nft-details/nft-details.page').then( m => m.NftDetailsPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'history',
    loadComponent: () => import('./pages/history/history.page').then( m => m.HistoryPage)
  },

];
