import { inject } from '@angular/core';
import {
  FormControlDirective,
  FormControlName,
  NgControl,
  NgModel,
} from '@angular/forms';

export function injectNgControl() {
  const ngControl = inject(NgControl, { self: true, optional: true });
  if (!ngControl) {
    throw new Error('Not ng Controll');
  }
  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    return ngControl;
  }
  throw new Error(`Not of instance of Form Directive Name Model`);
}
