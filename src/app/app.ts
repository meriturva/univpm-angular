import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { ItAccordionComponent } from 'design-angular-kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [ItAccordionComponent, RouterOutlet, RouterLink, CurrencyPipe]
})
export class App {
}
