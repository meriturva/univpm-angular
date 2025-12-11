import { Component } from '@angular/core';
import { Layout, LibLayoutFooter } from "@univpm/layout";
import { ModalExampleComponent } from './modal.component';

@Component({
  selector: 'app-main',
  imports: [Layout, LibLayoutFooter, ModalExampleComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  protected modalVisibile = false;

  public item = {
    name: 'diego',
    surname: 'bonura'
  };

  public onModalConfirm(event: {name: string}){
    console.log('Modal confirmed with:', event);
  }
}
