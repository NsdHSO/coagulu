import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  Renderer2,
} from '@angular/core';

type TypeMask = 'europe' | 'usa';

enum Country {
  EUROPE = 10,
  USA = 12,
}

@Directive({
  selector: '[sivanMask]',
  standalone: true,
})
export class MaskDirective {
  @Input({ required: true })
  typeMask: TypeMask = 'europe';
  /**
   * {ElementRef} elementRef - Reference to the host element.
   * @private
   */
  private readonly elementRef = inject(ElementRef);
  /**
   * {Renderer2} renderer - Renderer to manipulate the DOM.
   * @private
   */
  private readonly renderer2 = inject(Renderer2);

  constructor() {
    if (!(this.elementRef.nativeElement instanceof HTMLInputElement)) {
      console.warn(
        'Oops, Please applied this directive only to the input directive'
      );
    }
  }

  ngAfterViewInit(): void {
    if (this.elementRef.nativeElement.value) {
      this.onInput(this.elementRef.nativeElement.value.toString());
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    // Remove any non-digit characters

    // Format the value according to your requirements
    const formattedValue = this.formatValue(value.toString(), this.typeMask);

    // Update the input value with the formatted value
    this.renderer2.setProperty(
      this.elementRef.nativeElement,
      'value',
      formattedValue
    );
  }

  /**
   * Format the input value based on the desired pattern.
   *
   * @param value The input value
   * @param type
   * @returns The formatted value
   */
  formatValue(value: string, type: TypeMask = 'europe'): string {
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
      formattedValue = this.europeFormat(i, type, formattedValue, value);
    }
    return formattedValue;
  }

  /**
   * @param i
   * @param type
   * @param formattedValue
   * @param value
   */
  private europeFormat(
    i: number,
    type: 'europe' | 'usa',
    formattedValue: string,
    value: string
  ) {
    if (i < Country[type.toUpperCase() as keyof typeof Country]) {
      if (i === 0) {
        formattedValue += `(${value[i]}`;
      } else if (i === 3) {
        formattedValue += `) ${value[i]}`;
      } else if (i === 6) {
        formattedValue += ` ${value[i]}`;
      } else {
        formattedValue += value[i];
      }
    }
    return formattedValue;
  }
}
