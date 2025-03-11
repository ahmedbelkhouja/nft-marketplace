import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'market',
    loadComponent: () => import('./pages/market/market.page').then((m) => m.MarketPage),
  },
  {
    path: '',  // ✅ Only ONE default route
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
