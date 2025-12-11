import { Component, input } from '@angular/core';
import { ItInputComponent, ItModalComponent } from 'design-angular-kit';
import { BaseModalComponent } from './base-modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'modal-example',
  templateUrl: './modal.component.html',
  imports: [
    ItModalComponent,
    ItInputComponent,
    FormsModule
  ]
})
export class ModalExampleComponent extends BaseModalComponent<{name: string}> {

  public item = input.required<{name: string}>();

  protected value = 'valore iniziale';

  protected onOk(): void {
    this.confirmResult({name: this.value});
  }
}
