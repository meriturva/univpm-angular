import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ItAccordionComponent } from 'design-angular-kit';

@Component({
  selector: 'app-main-layout',
  imports: [ItAccordionComponent, RouterOutlet, RouterLink],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
