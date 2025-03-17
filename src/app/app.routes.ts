import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Keep only one redirect
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
      import('./pages/market/market.page').then((m) => m.MarketPage),
  },

  {
    path: 'create',
    loadComponent: () =>
      import('./pages/create/create.page').then((m) => m.CreatePage),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.page').then((m) => m.ContactPage),
  },

  {
    path: 'market/:id',
    loadComponent: () =>
      import('./pages/nft-details/nft-details.component').then(
        (m) => m.NftDetailsComponent
      ),
  },
  {
  path: 'connect',
  loadComponent: () =>
    import('./pages/connect/connect.page').then((m) => m.ConnectPage),
},
];
