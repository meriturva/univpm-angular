import { Routes } from '@angular/router';
import { Main } from './main/main';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login), data: { nome: 'Login' } },
  {
    path: 'main',
    component: Main,
    children: [
      { path: 'ordini', loadChildren: () => import('../pages/ordini/ordini.routes').then(m => m.ordine_routes) }
    ]
  }
];
