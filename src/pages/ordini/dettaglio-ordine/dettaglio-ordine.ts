import { DatePipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { concatMap, filter } from 'rxjs';

@Component({
  selector: 'app-dettaglio-ordine',
  imports: [RouterLink, DatePipe],
  templateUrl: './dettaglio-ordine.html',
  styleUrl: './dettaglio-ordine.scss'
})
export class DettaglioOrdine {
  protected id = inject(ActivatedRoute).snapshot.paramMap.get('id');

  protected date = new Date();
  protected isoString = this.date.toISOString();

  constructor(){
    inject(ActivatedRoute).paramMap.pipe(takeUntilDestroyed()).subscribe(p => {
      //this.id = id;
     console.log('paramMap',p);
    });
  }
}
