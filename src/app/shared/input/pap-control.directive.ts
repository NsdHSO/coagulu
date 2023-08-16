import { Directive } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[papControl]',
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
  writeValue(obj: any): void {
    //
  }
  registerOnChange(fn: any): void {
    //
  }
  registerOnTouched(fn: any): void {
    //
  }
}
