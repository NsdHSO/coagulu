import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { TypeConstantEnum } from 'ngx-ftx-forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  requiredValidator(control: AbstractControl, errorMsg?: string): any {
    return control.value
      ? null
      : { error: errorMsg || 'This field Is must' || true };
  }

  minValidator(control: AbstractControl, option: number, errorMsg?: string) {
    return control.value >= option ? null : { error: errorMsg || true };
  }

  minCharValidator(
    control: AbstractControl,
    option: number,
    errorMsg?: string
  ) {
    return String(control.value).length >= option ||
      String(control.value).length === 0
      ? null
      : { error: errorMsg || true };
  }

  patternValidator(
    control: FormControl,
    option: unknown,
    errorMsg?: string | undefined
  ) {
    const pattern =
      typeof option === 'string'
        ? new RegExp(option as string)
        : (option as RegExp);
    return pattern instanceof RegExp
      ? pattern.test(control.value)
        ? null
        : { error: errorMsg || true }
      : null;
  }

  emailValidator(control: FormControl, errorMsg?: string): any {
    if (!control.value) {
      return null;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(control.value)
      ? null
      : { error: errorMsg || true };
  }
}
