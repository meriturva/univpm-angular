import { AfterViewInit, DestroyRef, Directive, effect, inject, model, output, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ItModalComponent } from 'design-angular-kit';

@Directive()
export abstract class BaseModalComponent<TConfirmResult> implements AfterViewInit {
  public visible = model(false);
  private _innerModal = viewChild.required(ItModalComponent);

  public confirm = output<TConfirmResult>();

  private _destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      if (this.visible()) {
        this._innerModal().show();
      } else {
        this._innerModal().hide();
      }
    });
  }

  ngAfterViewInit(): void {
    this._innerModal().hideEvent
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      ).subscribe(() => {
        this.visible.set(false);
      });
  }

  protected confirmResult(result: TConfirmResult): void {
    this.confirm.emit(result);
    this.visible.set(false);
  }
}
