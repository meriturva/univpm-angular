import { Component, inject, OnInit } from '@angular/core';
import { OrdiniService } from '../services/ordini.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../models/post.model';

import { Layout } from '@univpm/layout';

@Component({
  selector: 'app-lista-ordini',
  imports: [RouterLink, Layout],
  templateUrl: './lista-ordini.html',
  styleUrl: './lista-ordini.scss',
})
export class ListaOrdini implements OnInit {
  private _ordiniService = inject(OrdiniService);
  protected ordini: Post[] = [];
  protected stati = inject(ActivatedRoute).snapshot.data['stati'];

  public ngOnInit(): void {

    this._ordiniService.getOrdini().subscribe(data => {
      this.ordini = data;
      console.log("chiamato", this.ordini)
    });
    console.log("fatto")
  }

}

