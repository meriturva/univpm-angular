import { Component, inject, OnInit } from '@angular/core';
import { OrdiniService } from '../services/ordini.service';
import { RouterLink } from '@angular/router';
import { PostDto } from '../dtos/post.dto';

@Component({
  selector: 'app-lista-ordini',
  imports: [RouterLink],
  templateUrl: './lista-ordini.html',
  styleUrl: './lista-ordini.scss',
})
export class ListaOrdini implements OnInit {
  private _ordiniService = inject(OrdiniService);
  protected ordini: PostDto[] = [];

  public ngOnInit(): void {
    this._ordiniService.getOrdini().subscribe(data => {
      this.ordini = data;
      console.log("chiamato")
    });
    console.log("fatto")
  }

}

