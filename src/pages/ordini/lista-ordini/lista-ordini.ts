import { Component, DEFAULT_CURRENCY_CODE, inject, OnInit } from '@angular/core';
import { OrdiniService } from '../services/ordini.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../models/post.model';

import { Layout } from '@univpm/layout';
import { CurrencyPipe, DatePipe, JsonPipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItInputComponent } from 'design-angular-kit';

@Component({
  selector: 'app-lista-ordini',
  imports: [RouterLink, Layout, CurrencyPipe, DatePipe, JsonPipe, FormsModule, NgClass, ItInputComponent],
  templateUrl: './lista-ordini.html',
  styleUrl: './lista-ordini.scss',
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'CAD' },
  ]
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


  protected formValue = {
    text: '',
    text1: 'altro testo'
  }

}

