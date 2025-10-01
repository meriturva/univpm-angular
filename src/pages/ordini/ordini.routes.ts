import { Routes } from '@angular/router';

export const ordine_routes: Routes = [
  { path: '', loadComponent: () => import('./lista-ordini/lista-ordini').then(m => m.ListaOrdini)  },
  { path: ':id', loadComponent: () => import('./dettaglio-ordine/dettaglio-ordine').then(m => m.DettaglioOrdine)  }
,
];
