import { inject } from '@angular/core';
import { ResolveFn, Routes } from '@angular/router';
import { OrdiniService } from './services/ordini.service';

const statiResolverFn: ResolveFn<string[]> = () => inject(OrdiniService).getOrdiniStatus();

export const ordine_routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./lista-ordini/lista-ordini').then(m => m.ListaOrdini),
    resolve: {
      stati: statiResolverFn
    }
  },
  { path: ':id', loadComponent: () => import('./dettaglio-ordine/dettaglio-ordine').then(m => m.DettaglioOrdine)  }
];
