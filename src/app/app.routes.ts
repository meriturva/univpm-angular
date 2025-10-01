import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) },
  {
    path: 'main',
    loadComponent: () => import('./main-layout/main-layout').then(m => m.MainLayout),
    children: [
      { path: 'ordini', loadChildren: () => import('../pages/ordini/ordini.routes').then(m => m.ordine_routes) }
    ]
  }
];
