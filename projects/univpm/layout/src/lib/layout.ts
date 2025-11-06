import { Component, Directive, inject, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ItAccordionComponent, ItHeaderComponent } from 'design-angular-kit';
import { LayoutConfig } from './layout.config';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-layout',
  imports: [ItAccordionComponent, RouterOutlet, RouterLink, ItHeaderComponent, TranslateModule],
  templateUrl: './layout.html',
  styles: ``
})
export class Layout {
  protected layoutConfig = inject(LayoutConfig, { optional: true }) ?? new LayoutConfig();

  public nome = input<string>();
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'lib-layout-footer',
})
export class LibLayoutFooter { }
