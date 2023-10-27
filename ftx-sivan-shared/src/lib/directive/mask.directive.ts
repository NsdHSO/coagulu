import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[sivanMask]',
  standalone: true,
})
export class MaskDirective {
  /**
   * {ElementRef} elementRef - Reference to the host element.
   * @private
   */
  private readonly elementRef = inject(ElementRef);
  constructor() {
    if (!(this.elementRef.nativeElement instanceof HTMLInputElement)) {
      console.warn(
        'Oops, Please applied this directive only to the input directive'
      );
    }
  }
}
