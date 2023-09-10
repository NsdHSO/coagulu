import { Directive } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[sivanControl]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PapControlDirective,
    },
  ],
})
export class PapControlDirective implements ControlValueAccessor {
  writeValue(): void {
    //
  }
  registerOnChange(): void {
    //
  }
  registerOnTouched(): void {
    //
  }
}
