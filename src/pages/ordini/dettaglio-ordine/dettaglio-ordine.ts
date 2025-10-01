import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio-ordine',
  imports: [],
  templateUrl: './dettaglio-ordine.html',
  styleUrl: './dettaglio-ordine.scss'
})
export class DettaglioOrdine {
  protected id = inject(ActivatedRoute).snapshot.paramMap.get('id');
}
